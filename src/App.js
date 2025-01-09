import './App.css';
import { Tour, Button } from 'antd';
import { useRef, useState, useEffect } from 'react';

function App() {
  const newGuideButtonRef = useRef(null);  // 直接使用ref

  const [steps, setSteps] = useState([]);
  const guidesDirection = [
    { title: "策略研究", description: " 如果想了解研究策略模块相关的使用，可以点击这里" },
    { title: "数据资源", description: "如果想了解数据资源模块相关的使用，可以点击这里" },
    { title: "用户管理", description: "如果想了解用户管理模块相关的使用，可以点击这里" },
  ];


  // 策略研究的各个步骤
  const strategySteps = [
    {
      title: "开始研究",
      description: "首先来到开始研究",
      target: () => document.querySelector(".start-search"),
    },
    {
      title: "个人空间",
      description: "在开始研究下，找到个人空间",
      target: () => document.querySelector(".personal-space"),
    },
    {
      title: "策略研究",
      description: "点击【策略研究】，我们在这里新建一个项目",
      target: () => document.querySelector(".strategy-research"),
    },
    {
      title: "新建项目",
      description: "点击【策略研究】，我们在这里新建一个项目",
      target: () => document.querySelector(".new-found"),
    },
    {
      title: "项目模型",
      description: "请输入项目名称、项目描述、选择项目模型",
      target: () => document.querySelector(".strategy-modal"),
    },
    {
      title: "点击确认创建项目",
      description: "点击【策略研究】，我们在这里新建一个项目",
      target: () => document.querySelector(".strategy-identify-btn"),
    },
    {
      title: "项目列表",
      description: "我们可以在这里查看项目列表",
      target: () => document.querySelector(".strategy-project-list"),
    }
  ]
  // 用户管理的各个步骤
  const userManageSteps = [
    {
      title: "管理中心",
      description: "Put your files here.",
      target: () => document.querySelector(".manage-center"),
    },
    {
      title: "用户管理",
      description: "Put your files here.",
      target: () => document.querySelector(".user-manage"),
    },
    {
      title: "添加",
      description: "点击【+添加】我们可以新建一个用户",
      target: () => document.querySelector(".add-user"),
    },
    {
      title: "添加用户",
      description: "在这里，我们可以添加用户，请在此输入用户的各种信息",
      target: () => document.querySelector(".user-add-project-model"),
    },
    {
      title: "项目",
      description: "在这里可以执行一些用户相关的操作，比如删除用户等",
      target: () => document.querySelector(".user-operation"),
    },

  ]
  // 数据资源的各个步骤
  const dataSourcesSteps = [
    {
      title: "开始研究",
      description: "Put your files here.",
      target: () => document.querySelector(".start-search"),
    },
    {
      title: "数据资源",
      description: "在【数据资源】中，我们可以找到我们所有的行情数据、基本面数据等一系列基础数据资源。",
      target: () => document.querySelector(".data-sources"),
    },
    {
      title: "数据库对象资源",
      description: "Put your files here.",
      target: () => document.querySelector(".database-object"),
    },
    {
      title: "公共资源",
      description: "通过【公共资源】，我们可以找到我们需要的数据，这里我们先找到股票日K数据。",
      target: () => document.querySelector(".pulic-sources"),
    },
    {
      title: "meta_data",
      description: "Put your files here.",
      target: () => document.querySelector(".database-object"),
    },
    {
      title: "stock_bar_1day",
      description: "Put your files here.",
      target: () => document.querySelector(".meta_data + div"),
    },
    {
      title: "表详情",
      description: "这样我们就查阅该行情数据表相关，字段、数据样例、数据说明、建表语句等详细信息了。",
      target: () => document.querySelector(".list-detail"),
    },
  ]

  const [ifGuideDataSources, onGuideDataSources] = useState(true);
  const [ifGuideStrategyResearch, onGuideStrategyResearch] = useState(true);
  const [ifGuideUserManage, onGuideUserManage] = useState(true);

  useEffect(() => {
    setSteps(
      !ifGuideDataSources ? dataSourcesSteps :
        !ifGuideUserManage ? userManageSteps : strategySteps
    );
  }, [ifGuideDataSources, ifGuideUserManage, ifGuideStrategyResearch]);

  const guideButtonRefs = useRef([]); // 用来存储每个按钮的ref
  const [isVisiable, setIsVisiable] = useState(false);

  return (
    <div className="App">
      <Tour
        open={!ifGuideDataSources || !ifGuideStrategyResearch || !ifGuideUserManage}
        onClose={() => {
          onGuideStrategyResearch(true);
          onGuideUserManage(true);
          onGuideDataSources(true)
        }}
        onFinish={() => {
          onGuideDataSources(true);
          onGuideStrategyResearch(true);
          onGuideUserManage(true);
        }}
        steps={
          // steps
          !ifGuideDataSources ? dataSourcesSteps : !ifGuideUserManage ? userManageSteps : strategySteps
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
            ref={newGuideButtonRef}
          />
        </div>
        {isVisiable && (
          <div className="avatar-box-new-guide-box-content">
            {guidesDirection.map((item, index) => {
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
                        onGuideStrategyResearch(false);
                      } else if (index === 1) {
                        onGuideDataSources(false);
                      } else {
                        onGuideUserManage(false);
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
