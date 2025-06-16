window.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  // =================== Intro 페이지 ===================
  if (page === 'intro') {
    const introParagraphs = document.querySelectorAll('.intro_textwrapper p');
    const introGoButton = document.querySelector('.go-button');
    let introCurrentIndex = 0;

    function showNextIntroLine() {
      if (introCurrentIndex < introParagraphs.length) {
        introParagraphs[introCurrentIndex].classList.add('visible');
        introCurrentIndex++;
        setTimeout(showNextIntroLine, 1000); // 1초 간격으로 한 줄씩 등장
      } else {
        introGoButton.classList.add('visible'); // 마지막에 GO 버튼 등장
      }
    }

    if (introParagraphs.length > 0) showNextIntroLine();
  }

  // =================== Ep01 Intro ===================
  if (page === 'ep01_intro') {
    const ep01Intro = document.getElementById('ep01Intro');
    if (ep01Intro) {
      setTimeout(() => {
        ep01Intro.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'Ep01.html';
        }, 1500);
      }, 3000);
    }
  }

  // =================== Ep01 ===================
  if (page === 'ep01') {
    const images = [
      'IMG/1-1.png', 'IMG/1-2.png', 'IMG/1-3.png',
      'IMG/1-4.png', 'IMG/1-5.png', 'IMG/1-6.png'
    ];
    let currentIndex = 0;
    let isButtonPhase = false;

    const imgEl = document.getElementById('displayed-image');
    const triEl = document.getElementById('triangle');
    const alarmBtn = document.getElementById('ep01_centerbtn');
    const imgWrapper = document.querySelector('.img_wrapper');

    if (imgEl && triEl && alarmBtn) {
      triEl.addEventListener('click', () => {
        if (!isButtonPhase && currentIndex < 3) {
          currentIndex++;
          imgEl.src = images[currentIndex];

          if (currentIndex === 3) {
            isButtonPhase = true;
            setTimeout(() => {
              alarmBtn.classList.add('visible');
            }, 1000);
          }
        } else if (currentIndex === 4) {
          currentIndex++;
          imgEl.src = images[currentIndex];
        } else if (currentIndex === 5) {
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep02_intro.html';
          }, 1500);
        }
      });

      alarmBtn.addEventListener('click', () => {
        currentIndex = 4;
        imgEl.src = images[currentIndex];
        alarmBtn.classList.remove('visible');
      });
    }
  }

  // =================== Ep02 Intro ===================
  if (page === 'ep02_intro') {
    const ep02Intro = document.getElementById('ep02Intro');
    if (ep02Intro) {
      setTimeout(() => {
        ep02Intro.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'Ep02.html';
        }, 1500);
      }, 3000);
    }
  }

  // =================== Ep02 ===================
  if (page === 'ep02') {
    const images = [
      'IMG/2-1.png', 'IMG/2-2.png',
      'IMG/2-3.png', 'IMG/2-4.png'
    ];
    let currentIndex = 0;

    const imgEl = document.getElementById('displayed-image');
    const triEl = document.getElementById('triangle');
    const imgWrapper = document.querySelector('.img_wrapper');

    if (imgEl && triEl) {
      triEl.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
          currentIndex++;
          imgEl.src = images[currentIndex];
        } else {
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep02_1.html';
          }, 1500);
        }
      });
    }
  }

    // =================== Ep02-1 ===================
  if (page === 'ep02_1') {
    const images = [
      'IMG/2-5.png',
      'IMG/2-6.png',
      'IMG/2-7.png',
    ];
    let currentIndex = 0;

    const imgEl = document.getElementById('displayed-image');
    const triEl = document.getElementById('triangle');
    const imgWrapper = document.querySelector('.img_wrapper');

    if (imgEl && triEl) {
      triEl.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
          currentIndex++;
          imgEl.src = images[currentIndex];
        } else {
          // 마지막 이미지 후 → 페이드아웃 → Ep03_intro.html로 이동
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep03_intro.html';
          }, 1500); // fade-out 시간과 맞춤
        }
      });
    }
  }

  // =================== Ep03 Intro ===================
if (page === 'ep03_intro') {
  const ep03Intro = document.getElementById('ep03Intro');
  if (ep03Intro) {
    setTimeout(() => {
      ep03Intro.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'Ep03.html';
      }, 1500);
    }, 3000);
  }
}

// =================== Ep03 ===================
if (page === 'ep03') {
  const images = [
    'IMG2/3-1.png',
    'IMG2/3-2.png',
    'IMG2/3-3.png',
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');

  if (imgEl && triEl) {
    triEl.addEventListener('click', () => {
      if (currentIndex === 1) {
        // 3-2에서 3-3로 넘어갈 때 페이드 아웃/인
        imgEl.classList.add('fade-out');
        setTimeout(() => {
          currentIndex++;
          imgEl.src = images[currentIndex];
          imgEl.classList.remove('fade-out');
          imgEl.classList.add('fade-in');
          setTimeout(() => imgEl.classList.remove('fade-in'), 1000);
        }, 1000);
      } else if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];
      } else {
       imgWrapper.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'Minigame.html';
        }, 1500);
      }
    });
  }
}

// =================== Ep04 intro ===================

if (page === 'ep04_intro') {
  const ep04Intro = document.getElementById('ep04Intro');
  if (ep04Intro) {
    setTimeout(() => {
      ep04Intro.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'Ep04.html';
      }, 1500);
    }, 3000);
  }
}

// Scripts.js 내 ep04 분기 추가
if (page === 'ep04') {
  const images = [
    'IMG2/4-1.png', 'IMG2/4-2.png', 'IMG2/4-3.png',
    'IMG2/4-4.png', 'IMG2/4-5.png', 'IMG2/4-6.png',
    'IMG2/4-7.png', 'IMG2/4-8.png', 'IMG2/4-9.png'
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');

  if (imgEl && triEl) {
    triEl.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];
      } else {
        imgWrapper.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = 'Ep05_intro.html';
        }, 1500);
      }
    });
  }
}



// =================== Ep05 intro ===================

if (page === 'ep05_intro') {
    const ep05Intro = document.getElementById('ep05Intro');
    if (ep05Intro) {
      // 3초 대기 후 페이드아웃
      setTimeout(() => {
        ep05Intro.classList.add('fade-out');

        // 페이드아웃 완료 후 1.5초 뒤 ep05.html로 이동
        setTimeout(() => {
          window.location.href = 'Ep05.html'; // 소문자 주의!
        }, 1500);
      }, 3000);
    }
  }

// =================== Ep05 ===================

if (page === 'ep05') {
  const images = [
    'IMG3/5-1.png', 'IMG3/5-2.png', 'IMG3/5-3.png',
    'IMG3/5-4.png', 'IMG3/5-5.png', 'IMG3/5-6.png'
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');
  const choices = document.getElementById('ep05-choices');
  const choiceButtons = document.querySelectorAll('.ep05-choice');

  if (imgEl && triEl && imgWrapper) {
    triEl.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];

        if (currentIndex === images.length - 1) {
          setTimeout(() => {
            choices.classList.remove('hidden');
          }, 2000); // 2초 후 선택지 등장
        }
      }
    });

    choiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const nextImg = btn.dataset.next;
        imgEl.src = `IMG3/${nextImg}`;
        choices.classList.add('hidden');

        setTimeout(() => {
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep06_intro.html';
          }, 2000);
        }, 3000);
      });
    });
  }
}


  // =================== Ep06 Intro ===================
if (page === 'ep06_intro') {
    const ep06Intro = document.getElementById('ep06Intro');
    if (ep06Intro) {
      // 3초 대기 후 페이드아웃
      setTimeout(() => {
        ep06Intro.classList.add('fade-out');

        // 페이드아웃 완료 후 1.5초 뒤 ep05.html로 이동
        setTimeout(() => {
          window.location.href = 'Ep06.html'; // 소문자 주의!
        }, 1500);
      }, 3000);
    }
  }

// =================== Ep06 ===================
if (page === 'ep06') {
  const images = [
    'IMG4/6-1.png', 'IMG4/6-2.png', 'IMG4/6-3.png',
    'IMG4/6-4.png', 'IMG4/6-5.png', 'IMG4/6-6.png',
    'IMG4/6-7.png', 'IMG4/6-8.png', 'IMG4/6-9.png',
    'IMG4/6-10.png'
  ];
  let currentIndex = 0;
  let hasChosen = false;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');
  const choices = document.getElementById('ep06-choices');
  const choiceButtons = document.querySelectorAll('.ep06-choice');

  if (imgEl && triEl && imgWrapper) {
    triEl.addEventListener('click', () => {
      if (hasChosen) return; // 선택 후 클릭 무시

      if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];

        if (currentIndex === 9) {
          // 6-10 보여준 후 2초 뒤 선택지 등장
          setTimeout(() => {
            choices.classList.remove('hidden');
          }, 2000);
        }
      }
    });

    choiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        hasChosen = true;
        const nextImg = btn.dataset.next;
        imgEl.src = `IMG4/${nextImg}`;
        choices.classList.add('hidden');

        // 3초 뒤 페이드아웃 → Ep07_intro.html 이동
        setTimeout(() => {
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep07_intro.html';
          }, 1500);
        }, 3000);
      });
    });
  }
}

// =================== Ep07 Intro ===================

if (page === 'ep07_intro') {
  const ep07Intro = document.getElementById('ep07Intro');
  if (ep07Intro) {
    setTimeout(() => {
      ep07Intro.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'Ep07.html';
      }, 1500);
    }, 3000);
  }
}

// =================== Ep07 ===================

if (page === 'ep07') {
  const images = [
    'IMG4/7-1.png', 'IMG4/7-2.png', 'IMG4/7-3.png',
     'IMG4/7-5.png', 'IMG4/7-6.png'
  ];
  let currentIndex = 0;
  let hasChosen = false;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');
  const choices = document.getElementById('ep07-choices');
  const choiceButtons = document.querySelectorAll('.ep07-choice');

  if (imgEl && triEl && imgWrapper) {
    triEl.addEventListener('click', () => {
      if (hasChosen) return;

      if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];

        if (currentIndex === 4) {
          setTimeout(() => {
            choices.classList.remove('hidden');
          }, 2000);
        }
      }
    });

    choiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        hasChosen = true;
        const nextImg = btn.dataset.next;
        imgEl.src = `IMG4/${nextImg}`;
        choices.classList.add('hidden');

        setTimeout(() => {
          imgWrapper.classList.add('fade-out');
          setTimeout(() => {
            window.location.href = 'Ep08_intro.html';
          }, 1500);
        }, 3000);
      });
    });
  }
}

// =================== Ep08 Intro ===================

if (page === 'ep08_intro') {
  const ep08Intro = document.getElementById('ep08Intro');
  if (ep08Intro) {
    setTimeout(() => {
      ep08Intro.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'Ep08.html';
      }, 1500);
    }, 3000);
  }
}

// =================== Ep08 ===================

if (page === 'ep08') {
  const images = [
    'IMG6/8-1.png', 'IMG6/8-2.png', 'IMG6/8-3.png',
    'IMG6/8-4.png', 'IMG6/8-5.png', 'IMG6/8-6.png'
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('displayed-image');
  const triEl = document.getElementById('triangle');
  const imgWrapper = document.querySelector('.img_wrapper');

  // 질문 영역들
  const q1 = document.getElementById('q1');
  const q2 = document.getElementById('q2');
  const q3 = document.getElementById('q3');
  const q4 = document.getElementById('q4');

  const allChoices = document.querySelectorAll('.ep08-choice');

  if (imgEl && triEl) {
    triEl.addEventListener('click', () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        imgEl.src = images[currentIndex];

        if (currentIndex === 5) {
          // 8-6까지 끝나고 질문 1 등장
          setTimeout(() => {
            q1.classList.remove('hidden');
          }, 1000);
        }
      }
    });

    allChoices.forEach(btn => {
      btn.addEventListener('click', () => {
        const next = btn.dataset.next;

        // 현재 질문 위치에 따라 다음 흐름 분기
        if (!q1.classList.contains('hidden')) {
          q1.classList.add('hidden');
          imgEl.src = `IMG6/${next}.png`; // 8-7
          q2.classList.remove('hidden');
          return;
        }

        if (!q2.classList.contains('hidden')) {
          q2.classList.add('hidden');
          if (next === 'Ending_Fail') {
            imgEl.src = `IMG6/Ending_Fail.png`;
          } else {
            imgEl.src = `IMG6/${next}.png`; // 8-8
            q3.classList.remove('hidden');
          }
          return;
        }

        if (!q3.classList.contains('hidden')) {
          q3.classList.add('hidden');
          if (next === 'Ending_Fail') {
            imgEl.src = `IMG6/Ending_Fail.png`;
          } else {
            imgEl.src = `IMG6/${next}.png`; // 8-9
            q4.classList.remove('hidden');
          }
          return;
        }

        if (!q4.classList.contains('hidden')) {
          q4.classList.add('hidden');
          imgEl.src = `IMG6/${next}.png`; // Ending_Clear or Ending_Fail
        }
      });
    });
  }
}


  });

//  기본 세팅
const boxArea = document.getElementById("box-area");
const zones = {
  item: document.getElementById("zone-item"),
  box: document.getElementById("zone-box"),
  pack: document.getElementById("zone-pack")
};

const counts = { item: 0, box: 0, pack: 0 };

//  박스 10개 생성
for (let i = 1; i <= 10; i++) {
  const container = document.createElement("div");
  container.className = "box-container";
  container.dataset.index = i;
  container.dataset.stage = "box"; // 상태: box → pack → done

  const box = document.createElement("img");
  box.src = "IMG6/box.png";
  box.className = "box";
  container.appendChild(box);

  container.addEventListener("click", () => {
    const stage = container.dataset.stage;

    //  1단계: box → box_2 + pack 생성
    if (stage === "box") {
      container.dataset.stage = "pack";

      box.src = "IMG6/box_2.png";

      //  box_2도 드래그 가능하게 설정
      box.draggable = true;
      box.addEventListener("dragstart", dragStart);

      const pack = document.createElement("img");
      pack.src = "IMG6/pack.png";
      pack.className = "pack";
      pack.draggable = true;
      pack.addEventListener("dragstart", dragStart);
      container.appendChild(pack);
    }

    //  2단계: item 생성
    else if (stage === "pack") {
      container.dataset.stage = "done";

      if (!container.querySelector(".item")) {
        const item = document.createElement("img");
        item.src = `IMG6/Item_${i}.png`;
        item.className = "item";
        item.draggable = true;
        item.addEventListener("dragstart", dragStart);
        container.appendChild(item);
      }
    }

    //  3단계: done 상태는 무시
  });

  boxArea.appendChild(container);
}

//  드래그 시작 이벤트
function dragStart(e) {
  e.dataTransfer.setData("type", e.target.className);
  e.dataTransfer.setData("index", e.target.parentElement.dataset.index);
}

//  드롭 영역 설정
Object.entries(zones).forEach(([key, zone]) => {
  zone.addEventListener("dragover", (e) => e.preventDefault());

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    const type = e.dataTransfer.getData("type");
    const index = e.dataTransfer.getData("index");

    if (
      (key === "item" && type === "item") ||
      (key === "box" && type === "box") ||
      (key === "pack" && type === "pack")
    ) {
      //  시각 피드백
      zone.classList.add("active");
      setTimeout(() => zone.classList.remove("active"), 300);

      //  원래 위치에서 제거
      const originalContainer = document.querySelector(`.box-container[data-index="${index}"]`);
      const draggedElement = originalContainer.querySelector(`.${type}`);
      if (draggedElement) {
        draggedElement.remove();
      }

      //  드롭 위치에 이미지 표시
      const droppedImg = document.createElement("img");
      droppedImg.src = `IMG6/${type === 'item' ? 'Item_' + index : type}.png`;
      droppedImg.className = "dropped";
      droppedImg.style.position = "absolute";
      droppedImg.style.width = "60px";
      droppedImg.style.pointerEvents = "none";
      droppedImg.style.left = e.offsetX - 30 + "px";
      droppedImg.style.top = e.offsetY - 30 + "px";
      zone.appendChild(droppedImg);

      counts[key]++;
      checkClear();
    }
  });
});

//  성공 조건
function checkClear() {
  if (counts.item >= 10 && counts.box >= 10 && counts.pack >= 10) {
    document.getElementById("img_wrapper").classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "Ep04_intro.html";
    }, 1000);
  }
}
