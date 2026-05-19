const quotes = [
    { text: '生活不是等待风暴过去，而是学会在雨中翩翩起舞。', author: '维维安·格林' },
    { text: '成功的秘诀在于始终如一地坚持目标。', author: '佚名' },
    { text: '不要等待机会，而要创造机会。', author: '林肯' },
    { text: '人生最大的挑战是发现自己是谁，第二大的挑战是对所发现的感到满意。', author: '罗杰·塞尔夫' },
    { text: '只有那些敢于相信自己内心深处的人，才能改变世界。', author: '乔布斯' },
    { text: '时间是最公平的资源，每个人每天都有24小时。', author: '佚名' },
    { text: '成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成。', author: '俞敏洪' },
    { text: '人生没有彩排，每一天都是现场直播。', author: '佚名' },
    { text: '每一个不曾起舞的日子，都是对生命的辜负。', author: '尼采' },
    { text: '生活的意义在于美好，在于向往目标的力量，应当使征途的每一瞬间都具有崇高的目的。', author: '高尔基' },
    { text: '世界上只有一种英雄主义，就是看清生活的真相之后依然热爱生活。', author: '罗曼·罗兰' },
    { text: '生命中最美好的事物都是免费的：微笑、拥抱、朋友、爱和美好的回忆。', author: '佚名' },
    { text: '成功的路上并不拥挤，因为坚持的人不多。', author: '佚名' },
    { text: '不要为成功而努力，要为做一个有价值的人而努力。', author: '爱因斯坦' },
    { text: '生活就像骑自行车，要保持平衡就得不断前进。', author: '爱因斯坦' },
    { text: '如果你想要从未拥有过的东西，那么你必须去做从未做过的事。', author: '佚名' },
    { text: '梦想不是用来想的，而是用来实现的。', author: '佚名' },
    { text: '人生的价值，并不是用时间，而是用深度去衡量的。', author: '列夫·托尔斯泰' },
    { text: '相信你能，你就已经成功了一半。', author: '西奥多·罗斯福' },
    { text: '只有经历过地狱般的磨砺，才能练就创造天堂的力量。', author: '泰戈尔' },
    { text: '勇气不是没有恐惧，而是战胜恐惧。', author: '纳尔逊·曼德拉' },
    { text: '知识是心灵的眼睛。', author: '德雷克' },
    { text: '逆境是达到真理的一条通路。', author: '拜伦' },
    { text: '世界会向那些有目标和远见的人让路。', author: '冯两努' },
    { text: '人生重要的不是所站的位置，而是所朝的方向。', author: '佚名' },
    { text: '心灵的成熟过程是持续不断的自我发现、自我探寻的过程。', author: '梭罗' },
    { text: '人生最大的快乐不在于占有什么，而在于追求什么的过程中。', author: '班廷' },
    { text: '一个人的价值，应该看他贡献什么，而不应当看他取得什么。', author: '爱因斯坦' },
    { text: '有志者，事竟成，破釜沉舟，百二秦关终属楚。', author: '蒲松龄' },
    { text: '苦心人，天不负，卧薪尝胆，三千越甲可吞吴。', author: '蒲松龄' },
    { text: '路漫漫其修远兮，吾将上下而求索。', author: '屈原' },
    { text: '长风破浪会有时，直挂云帆济沧海。', author: '李白' },
    { text: '天生我材必有用，千金散尽还复来。', author: '李白' },
    { text: '人生自古谁无死，留取丹心照汗青。', author: '文天祥' },
    { text: '海内存知己，天涯若比邻。', author: '王勃' },
    { text: '山重水复疑无路，柳暗花明又一村。', author: '陆游' },
    { text: '落红不是无情物，化作春泥更护花。', author: '龚自珍' },
    { text: '问渠那得清如许，为有源头活水来。', author: '朱熹' },
    { text: '纸上得来终觉浅，绝知此事要躬行。', author: '陆游' },
    { text: '沉舟侧畔千帆过，病树前头万木春。', author: '刘禹锡' },
    { text: '不畏浮云遮望眼，自缘身在最高层。', author: '王安石' },
    { text: '千淘万漉虽辛苦，吹尽狂沙始到金。', author: '刘禹锡' },
    { text: '不经一番寒彻骨，怎得梅花扑鼻香。', author: '黄蘖禅师' },
    { text: '宝剑锋从磨砺出，梅花香自苦寒来。', author: '佚名' },
    { text: '少壮不努力，老大徒伤悲。', author: '汉乐府' },
    { text: '业精于勤，荒于嬉；行成于思，毁于随。', author: '韩愈' },
    { text: '黑发不知勤学早，白首方悔读书迟。', author: '颜真卿' },
    { text: '莫等闲，白了少年头，空悲切。', author: '岳飞' },
    { text: '明日复明日，明日何其多。我生待明日，万事成蹉跎。', author: '钱福' }
];

let generatedCount = 0;
let lastIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex && quotes.length > 1);
    lastIndex = randomIndex;
    return quotes[randomIndex];
}

function displayQuote() {
    const quoteArea = document.getElementById('quoteArea');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteCount = document.getElementById('quoteCount');

    const quote = getRandomQuote();
    
    quoteArea.classList.remove('fade-in');
    void quoteArea.offsetWidth;
    quoteArea.classList.add('fade-in');
    
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author || '';
    
    generatedCount++;
    quoteCount.textContent = `已生成 ${generatedCount} 条语录`;
}

async function copyQuote() {
    const quoteText = document.getElementById('quoteText').textContent;
    const quoteAuthor = document.getElementById('quoteAuthor').textContent;
    
    let textToCopy = quoteText;
    if (quoteAuthor) {
        textToCopy += `\n— ${quoteAuthor}`;
    }
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
        const copyBtn = document.getElementById('copyBtn');
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<span class="btn-icon">✓</span> 已复制';
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = '<span class="btn-icon">📋</span> 复制语录';
        }, 2000);
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制');
    }
}

function init() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    
    generateBtn.addEventListener('click', displayQuote);
    copyBtn.addEventListener('click', copyQuote);
}

document.addEventListener('DOMContentLoaded', init);