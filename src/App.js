import './App.css';
import { Tour, Button } from 'antd';
import { useRef, useState, useEffect } from 'react';

function App() {
  const stepGroupsButtonRef = useRef(null);

  const [steps, setSteps] = useState([]);
  const stepGroupsDirection = [
    { title: "stepGroup1", description: " this is stepGroup1" },
    { title: "stepGroup2", description: "this is stepGroup2" },
    { title: "stepGroup3", description: "this is stepGroup3" },
  ];
  // steps1
  const stepGroup1 = [
    {
      title: "step1",
      description: "this is step1",
      target: () => document.querySelector(".step1"),
    },
    {
      title: "step2",
      description: "this is step2",
      target: () => document.querySelector(".step2"),
    },
    {
      title: "step3",
      description: "this is step3",
      target: () => document.querySelector(".step3"),
    },
    {
      title: "step4",
      description: "this is step4",
      target: () => document.querySelector(".step4"),
    },
    {
      title: "step5",
      description: "this is step5",
      target: () => document.querySelector(".step5"),
    },
    {
      title: "step6",
      description: "this is step6",
      target: () => document.querySelector(".step6"),
    },
    {
      title: "step7",
      description: "this is step7",
      target: () => document.querySelector(".step7"),
    }
  ]
  // steps2
  const stepGroup2 = [
    {
      title: "step1",
      description: "this is step1",
      target: () => document.querySelector(".step1"),
    },
    {
      title: "step2",
      description: "this is step2",
      target: () => document.querySelector(".step2"),
    },
    {
      title: "step3",
      description: "this is step3",
      target: () => document.querySelector(".step3"),
    },
    {
      title: "step4",
      description: "this is step4",
      target: () => document.querySelector(".step4"),
    },
    {
      title: "step5",
      description: "this is step5",
      target: () => document.querySelector(".step5"),
    },
    {
      title: "step6",
      description: "this is step6",
      target: () => document.querySelector(".step6"),
    },
    {
      title: "step7",
      description: "this is step7",
      target: () => document.querySelector(".step7"),
    }
  ]
  // steps3
  const stepGroup3 = [
    {
      title: "step1",
      description: "this is step1",
      target: () => document.querySelector(".step1"),
    },
    {
      title: "step2",
      description: "this is step2",
      target: () => document.querySelector(".step2"),
    },
    {
      title: "step3",
      description: "this is step3",
      target: () => document.querySelector(".step3"),
    }
  ]

  const [ifDoneStepGroup1, setIfDoneStepGroup1] = useState(true);
  const [ifDoneStepGroup2, setIfDoneStepGroup2] = useState(true);
  const [ifDoneStepGroup3, setIfDoneStepGroup3] = useState(true);

  useEffect(() => {
    setSteps(
      !ifDoneStepGroup1 ? stepGroup1 :
        !ifDoneStepGroup2 ? stepGroup2 : stepGroup3
    );
  }, [ifDoneStepGroup1, ifDoneStepGroup2, ifDoneStepGroup3]);

  const guideButtonRefs = useRef([]); // 用来存储每个按钮的ref
  const [isVisiable, setIsVisiable] = useState(false);

  return (
    <div className="App">
      <Tour
        open={!ifDoneStepGroup1 || !ifDoneStepGroup2 || !ifDoneStepGroup3}
        onClose={() => {
          setIfDoneStepGroup1(true)
          setIfDoneStepGroup2(true);
          setIfDoneStepGroup3(true);
        }}
        onFinish={() => {
          setIfDoneStepGroup1(true);
          setIfDoneStepGroup2(true);
          setIfDoneStepGroup3(true);
        }}
        steps={
          steps
          // !ifDoneStepGroup1 ? stepGroup1 : !ifDoneStepGroup2 ? stepGroup2 : stepGroup3
        }
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />

      <div className="avatar-box-new-guide-box">
        <div className="avatar-box-new-guide-box-button">
          <Button type="primary" size="middle" shape="circle"
            onClick={() => setIsVisiable(!isVisiable)}
            ref={stepGroupsButtonRef}
          />
        </div>
        {isVisiable && (
          <div className="avatar-box-new-guide-box-content">
            {stepGroupsDirection.map((item, index) => {
              return (
                <div
                  ref={(el) => {
                    if (el) {
                      guideButtonRefs.current[index] = el;
                    }
                  }}
                  key={index}
                >
                  <Button
                    type="primary"
                    size="middle"
                    shape="circle"
                    onClick={() => {
                      if (index === 0) {
                        setIfDoneStepGroup1(false);
                      } else if (index === 1) {
                        setIfDoneStepGroup2(false);
                      } else {
                        setIfDoneStepGroup3(false);
                      }
                    }}
                  />
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
