const topicsData = [
  {
    id: 'mobile',
    title: '手機',
    subtitle: 'Mobile Phone',
    sentences: [
      { id: 1, chinese: "我用手機。", zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄕㄡˇ ㄐㄧ。", english: "I use a mobile phone." },
      { id: 2, chinese: "我用我的手機。", zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄡˇ ㄐㄧ。", english: "I use my mobile phone." },
      { id: 3, chinese: "我用我的新手機。", zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ。", english: "I use my new mobile phone." },
      { id: 4, chinese: "我用我的新手機拍照。", zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ ㄆㄞ ㄓㄠˋ。", english: "I use my new mobile phone to take photos." },
      { id: 5, chinese: "我用我的新手機每天拍照。", zhuyin: "ㄨㄛˇ ㄩㄥˋ ㄨㄛˇ ㄉㄜ˙ ㄒㄧㄣ ㄕㄡˇ ㄐㄧ ㄇㄟˇ ㄊㄧㄢ ㄆㄞ ㄓㄠˋ。", english: "I use my new mobile phone to take photos every day." }
    ]
  },
  {
    id: 'greetings',
    title: '打招呼',
    subtitle: 'Greetings',
    sentences: [
      { id: 1, chinese: "你好。", zhuyin: "ㄋㄧˇ ㄏㄠˇ。", english: "Hello." },
      { id: 2, chinese: "早安。", zhuyin: "ㄗㄠˇ ㄢ。", english: "Good morning." },
      { id: 3, chinese: "最近好嗎？", zhuyin: "ㄗㄨㄟˋ ㄐㄧㄣˋ ㄏㄠˇ ㄇㄚ˙？", english: "How have you been lately?" },
      { id: 4, chinese: "很高興認識你。", zhuyin: "ㄏㄣˇ ㄍㄠ ㄒㄧㄥˋ ㄖㄣˋ ㄕˋ ㄋㄧˇ。", english: "Nice to meet you." },
      { id: 5, chinese: "再見，明天見。", zhuyin: "ㄗㄞˋ ㄐㄧㄢˋ， ㄇㄧㄥˊ ㄊㄧㄢ ㄐㄧㄢˋ。", english: "Goodbye, see you tomorrow." }
    ]
  },
  {
    id: 'photo',
    title: '拍照',
    subtitle: 'Taking Photos',
    sentences: [
      { id: 1, chinese: "可以幫我拍照嗎？", zhuyin: "ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄆㄞ ㄓㄠˋ ㄇㄚ˙？", english: "Can you take a picture for me?" },
      { id: 2, chinese: "笑一個！", zhuyin: "ㄒㄧㄠˋ ㄧˊ ㄍㄜ˙！", english: "Smile!" },
      { id: 3, chinese: "這張照片很好看。", zhuyin: "ㄓㄜˋ ㄓㄤ ㄓㄠˋ ㄆㄧㄢˋ ㄏㄣˇ ㄏㄠˇ ㄎㄢˋ。", english: "This photo looks great." },
      { id: 4, chinese: "我們來合照吧。", zhuyin: "ㄨㄛˇ ㄇㄣ˙ ㄌㄞˊ ㄏㄜˊ ㄓㄠˋ ㄅㄚ˙。", english: "Let's take a group photo." },
      { id: 5, chinese: "光線太暗了。", zhuyin: "ㄍㄨㄤ ㄒㄧㄢˋ ㄊㄞˋ ㄢˋ ㄌㄜ˙。", english: "The lighting is too dark." }
    ]
  },
  {
    id: 'shopping',
    title: '購物',
    subtitle: 'Shopping',
    sentences: [
      { id: 1, chinese: "這個多少錢？", zhuyin: "ㄓㄜˋ ㄍㄜ˙ ㄉㄨㄛ ㄕㄠˇ ㄑㄧㄢˊ？", english: "How much is this?" },
      { id: 2, chinese: "太貴了，可以便宜一點嗎？", zhuyin: "ㄊㄞˋ ㄍㄨㄟˋ ㄌㄜ˙， ㄎㄜˇ ㄧˇ ㄆㄧㄢˊ ㄧˊ ㄧˋ ㄉㄧㄢˇ ㄇㄚ˙？", english: "It's too expensive, can you make it a little cheaper?" },
      { id: 3, chinese: "我要買這個。", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄇㄞˇ ㄓㄜˋ ㄍㄜ˙。", english: "I want to buy this." },
      { id: 4, chinese: "請問可以刷卡嗎？", zhuyin: "ㄑㄧㄥˇ ㄨㄣˋ ㄎㄜˇ ㄧˇ ㄕㄨㄚ ㄎㄚˇ ㄇㄚ˙？", english: "Can I pay by credit card?" },
      { id: 5, chinese: "我要一個袋子，謝謝。", zhuyin: "ㄨㄛˇ ㄧㄠˋ ㄧˊ ㄍㄜ˙ ㄉㄞˋ ㄗ˙， ㄒㄧㄝˋ ㄒㄧㄝ˙。", english: "I need a bag, thank you." }
    ]
  },
  {
    id: 'driving',
    title: '開車',
    subtitle: 'Driving',
    sentences: [
      { id: 1, chinese: "我會開車。", zhuyin: "ㄨㄛˇ ㄏㄨㄟˋ ㄎㄞ ㄔㄜ。", english: "I can drive." },
      { id: 2, chinese: "請繫好安全帶。", zhuyin: "ㄑㄧㄥˇ ㄐㄧˋ ㄏㄠˇ ㄢ ㄑㄩㄢˊ ㄉㄞˋ。", english: "Please fasten your seatbelt." },
      { id: 3, chinese: "前面路口右轉。", zhuyin: "ㄑㄧㄢˊ ㄇㄧㄢˋ ㄌㄨˋ ㄎㄡˇ ㄧㄡˋ ㄓㄨㄢˇ。", english: "Turn right at the intersection ahead." },
      { id: 4, chinese: "現在塞車很嚴重。", zhuyin: "ㄒㄧㄢˋ ㄗㄞˋ ㄙㄞ ㄔㄜ ㄏㄣˇ ㄧㄢˊ ㄓㄨㄥˋ。", english: "The traffic is very bad right now." },
      { id: 5, chinese: "哪裡有停車場？", zhuyin: "ㄋㄚˇ ㄌㄧˇ ㄧㄡˇ ㄊㄧㄥˊ ㄔㄜ ㄔㄤˇ？", english: "Where is a parking lot?" }
    ]
  },
  {
    id: 'farm',
    title: '農場',
    subtitle: 'Farm',
    sentences: [
      { id: 1, chinese: "農場裡有很多動物。", zhuyin: "ㄋㄨㄥˊ ㄔㄤˇ ㄌㄧˇ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄉㄨㄥˋ ㄨˋ。", english: "There are many animals on the farm." },
      { id: 2, chinese: "我們去餵羊。", zhuyin: "ㄨㄛˇ ㄇㄣ˙ ㄑㄩˋ ㄨㄟˋ ㄧㄤˊ。", english: "Let's go feed the sheep." },
      { id: 3, chinese: "這些水果很新鮮。", zhuyin: "ㄓㄜˋ ㄒㄧㄝ ㄕㄨㄟˇ ㄍㄨㄛˇ ㄏㄣˇ ㄒㄧㄣ ㄒㄧㄢ。", english: "These fruits are very fresh." },
      { id: 4, chinese: "這頭牛正在吃草。", zhuyin: "ㄓㄜˋ ㄊㄡˊ ㄋㄧㄡˊ ㄓㄥˋ ㄗㄞˋ ㄔ ㄘㄠˇ。", english: "This cow is eating grass." },
      { id: 5, chinese: "我喜歡鄉下的風景。", zhuyin: "ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄒㄧㄤ ㄒㄧㄚˋ ㄉㄜ˙ ㄈㄥ ㄐㄧㄥˇ。", english: "I like the scenery in the countryside." }
    ]
  }
];

// Current State
let currentTopicId = null;

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
    const topic = topicsData.find(t => t.id === currentTopicId);
    if (!topic) return;

    for (const sentence of topic.sentences) {
        // If user navigated away, stop playing
        if (currentTopicId !== topic.id) {
            synth.cancel();
            break;
        }

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

// Rendering Logic
function renderHome() {
    currentTopicId = null;
    synth.cancel(); // Stop any playing audio

    document.getElementById('topic-view').style.display = 'none';
    document.getElementById('home-view').style.display = 'block';

    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';

    topicsData.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.subtitle}</p>
        `;
        card.addEventListener('click', () => {
            renderTopic(topic.id);
        });
        grid.appendChild(card);
    });
}

function renderTopic(topicId) {
    const topic = topicsData.find(t => t.id === topicId);
    if (!topic) return;

    currentTopicId = topicId;
    synth.cancel(); // Stop any playing audio from previous screens

    // Update Header
    document.getElementById('topic-title').textContent = topic.title;
    document.getElementById('topic-subtitle').textContent = topic.subtitle;

    // Render Sentences
    const grid = document.getElementById('sentence-grid');
    grid.innerHTML = '';

    topic.sentences.forEach((sentence) => {
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

    // Attach specific listeners
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const sentence = topic.sentences.find(s => s.id === id);
            if (sentence) {
                playAudio(sentence.chinese);
            }
        });
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            const sentence = topic.sentences.find(s => s.id === id);
            if (sentence) {
                const content = `${sentence.chinese}\n${sentence.zhuyin}\n${sentence.english}`;
                downloadText(`sentence_${topic.id}_${id}.txt`, content);
            }
        });
    });

    // Switch Views
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('topic-view').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0,0);
}

// Event Listeners for static buttons
document.getElementById('back-btn').addEventListener('click', renderHome);

document.getElementById('play-all-btn').addEventListener('click', () => {
    synth.cancel();
    playAll();
});

document.getElementById('download-all-btn').addEventListener('click', () => {
    const topic = topicsData.find(t => t.id === currentTopicId);
    if (!topic) return;

    let content = `${topic.title} / ${topic.subtitle}\n\n`;
    topic.sentences.forEach(s => {
        content += `${s.chinese}\n${s.zhuyin}\n${s.english}\n\n`;
    });
    downloadText(`${topic.id}_all_sentences.txt`, content);
});

// Initialize App
document.addEventListener('DOMContentLoaded', renderHome);
