const sentences = [
  {
    id: 1,
    chinese: "我用手機。",
    zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄕㄡˇ ㄐㄧ。",
    english: "I use a mobile phone."
  },
  {
    id: 2,
    chinese: "我用我的手機。",
    zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ。",
    english: "I use my mobile phone."
  },
  {
    id: 3,
    chinese: "我用我的新手機。",
    zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ。",
    english: "I use my new mobile phone."
  },
  {
    id: 4,
    chinese: "我用我的新手機拍照。",
    zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ ㄆㄞ ㄓㄠˋ。",
    english: "I use my new mobile phone to take photos."
  },
  {
    id: 5,
    chinese: "我用我的新手機每天拍照。",
    zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ ㄇㄟˇ ㄊㄧㄢ ㄆㄞ ㄓㄠˋ。",
    english: "I use my new mobile phone to take photos every day."
  }
];

// Icons
const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`;
const downloadIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`;

// Speech Synthesis setup
const synth = window.speechSynthesis;
let availableVoices = [];

function loadVoices() {
    availableVoices = synth.getVoices();
}

// Voices are loaded asynchronously on many browsers
loadVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

function playAudio(text) {
    // Cancel any stuck speech
    synth.cancel();
    
    if (text !== '') {
        const utterThis = new SpeechSynthesisUtterance(text);
        
        // Try to explicitly find and set a Chinese voice for better mobile compatibility
        const zhVoice = availableVoices.find(voice => 
            voice.lang === 'zh-TW' || 
            voice.lang.includes('zh-TW') || 
            voice.lang.includes('zh-HK') || 
            voice.lang.includes('zh-CN') || 
            voice.lang.includes('zh')
        );
        
        if (zhVoice) {
            utterThis.voice = zhVoice;
        }
        
        utterThis.lang = 'zh-TW'; // Fallback if no specific voice object found
        utterThis.rate = 0.9; // Slightly slower for learning
        
        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror', event);
        }
        
        synth.speak(utterThis);
    }
}

async function playAll() {
    for (const sentence of sentences) {
        await new Promise(resolve => {
            const utterThis = new SpeechSynthesisUtterance(sentence.chinese);
            
            const zhVoice = availableVoices.find(voice => 
                voice.lang === 'zh-TW' || voice.lang.includes('zh-TW') || voice.lang.includes('zh')
            );
            if (zhVoice) {
                utterThis.voice = zhVoice;
            }
            
            utterThis.lang = 'zh-TW';
            utterThis.rate = 0.9;
            utterThis.onend = () => {
                // Add a small pause between sentences
                setTimeout(resolve, 800);
            };
            utterThis.onerror = (e) => {
                console.error(e);
                resolve();
            };
            synth.speak(utterThis);
        });
    }
}

function downloadText(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function renderSentences() {
    const grid = document.getElementById('sentence-grid');
    grid.innerHTML = '';

    sentences.forEach((sentence, index) => {
        const card = document.createElement('div');
        card.className = 'sentence-card';
        card.innerHTML = `
            <p class="chinese-text">${sentence.chinese}</p>
            <p class="zhuyin-text">${sentence.zhuyin}</p>
            <p class="english-text">${sentence.english}</p>
            <div class="card-actions">
                <button class="icon-btn play-btn" data-id="${sentence.id}" title="Play" aria-label="Play">
                    ${playIcon}
                </button>
                <button class="icon-btn download-btn" data-id="${sentence.id}" title="Download" aria-label="Download text">
                    ${downloadIcon}
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Add event listeners for individual cards
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const sentence = sentences.find(s => s.id === id);
            if (sentence) {
                playAudio(sentence.chinese);
            }
        });
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const sentence = sentences.find(s => s.id === id);
            if (sentence) {
                const content = `${sentence.chinese}\n${sentence.zhuyin}\n${sentence.english}`;
                downloadText(`sentence_${id}.txt`, content);
            }
        });
    });
}

// Group Action Listeners
document.getElementById('play-all-btn').addEventListener('click', () => {
    // Cancel any ongoing speech before starting a new queue
    synth.cancel();
    playAll();
});

document.getElementById('download-all-btn').addEventListener('click', () => {
    let content = "手機 / Mobile Phone\n\nGroup 1\n\n";
    sentences.forEach(s => {
        content += `${s.chinese}\n${s.zhuyin}\n${s.english}\n\n`;
    });
    downloadText("mobile_phone_group_1.txt", content);
});

// Initialize
document.addEventListener('DOMContentLoaded', renderSentences);
