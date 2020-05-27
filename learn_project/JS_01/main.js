document.getElementById('cn').onclick = () => {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';
  };
  
  document.getElementById('us').onclick =
  document.getElementById('uk').onclick = () => {
    document.title = 'Silly story generator';
    document.getElementById('lbl-customname').textContent = 'Enter custom name:';
    document.getElementById('lbl-cn').textContent = 'CN';
    document.getElementById('lbl-us').textContent = 'US';
    document.getElementById('lbl-uk').textContent = 'UK';
    document.getElementById('customname').placeholder = 'Bob';
    document.querySelector('.randomize').textContent = 'Generate random story';
  };

  let storyTextZh = '外边有34度，:inserta:出去遛弯。当走到:insertb:时小伙伴们都惊呆了，他:insertc:。李雷全程目睹但他并没有慌，因为:inserta:是一个270斤的胖子，天气又辣么热。';
  let insertA = ['怪兽威利', '大老爹', '圣诞老人'];
  let insertB = ['救助站', '迪士尼乐园', '白宫'];
  let insertC = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

  let customName = document.getElementById('customname');
  let randomize = document.querySelector('.randomize');
  let story = document.querySelector('.story');

  document.getElementsByClassName('randomize').onclick = () =>{
    let newStory;
    
    story.textContent = newStory;
  };