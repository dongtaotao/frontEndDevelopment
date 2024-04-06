面试官你好，我叫---，我目前在---基础平台架构组，在自------已经三年多了，
目前主要负责公司性能监控分析平台网站的建设，
负责项目整体技术架构以及研发工作，整体框架搭建，技术方案制定，性能优化，制定开发规范，
推动前端工程化等
带领一个小团队参与项目开发，--------是项目负责人。
同时也维护公司JSSDK技术框架，以及参与公司运营后台，以及H5相关的开发开发。
前期参与过公司React-Native 框架建设，维护以及业务开发。
也参公司Flutter框架的建设，落地公司第一个Flutter项目。
对前端，web，H5，Hybrid，以及跨平台端等技术有着丰富的开发经验。
主要技术站是有react，vue，小程序，RN，flutter的等。
平时喜欢调研一些新技术，看一些技术文章
平时也会写技术博客，总结学习（目前个人维护的 CSDN 技术博客访问量已经达到一千多万条了，自己写了三百多篇文章）。
上一家公司是在上海京东。在京东业主要从事前端相关的项目开发
1.项目背景
  公司内部有几十个app，但是每个app的质量我们没法保证，也没有统一的监控。每个业务线app投递的数据
  （比如用户行为数据，性能数据，异常数据），可能是第三方网站，也可能是自己内部开发分析平台
  为了统一规范数据，架构组提供了很多监控性能的SDK
  // 关键性能指标的SDK： 崩溃，卡顿，内存分析，冻帧分析
  // 页面性能数据SDK（app启动时间、页面打开时间），
  // 网络监控数据SDK（http请求性能、dns、webview请求），
  // 业务异常数据SDK（异常栈
  本次性能监控分析平台就是为了收集所有业务端app的性能数据做，多维度的分析可是化展示的,接入了公司项目管理系统
  添加报警订阅功能，实时监控性能数据，发送email给指定的负责人，或者聊天系统，以及公众号。
2.项目目的： 为线上app质量提供实时，全覆盖，多维度监控和报警功能。（进行多维度分析），保证质量
3.我的职责： 负责前端整体技术架构设计和需求开发，推动项目按时按质量的交付上线，以及上线后之后的安全稳定运行
🔥🔥🔥🔥🔥🔥🔥🔥负责技术选型，项目框架搭建，集成框架React全家桶，让项目更加模块化，组件化，规范化，自动化。 
  🌰技术选型选什么：技术没有好坏之分，看是否适合团队
  技术选型依据 
    1.要站在团队的角度，而非个人的角度。2.团队成员的学习成本3.是否符合团队的技术栈
    4.公司是否已经有经验积累5.是否符合项目需求----   
    ---前端框架选型（vue，react，angular）语言（js，ts）状态管理，构建工具选型（vite，webpack roolup）
    自动化工具（jenkins， gitlabci， github action）
    应用需要尽可能的小和快就用vue，vue渲染速度比react快
    大型项目建议用react，因为vue模板的使用不容易发现错误、也不易拆分和测试，react和ts结合更好
🌰为什么要搭建脚手架。https://blog.51cto.com/u_3044148/3351023
  平时在创建react项目时，我们总喜欢用脚手架，因为这样可以快速搭建起项目。但是弊端也是有的，
  比如不太容易理解项目为什么要这样搭建，也可能搞不清楚各部分代码是如何配合的，
  1.便于扩展，可以根据需要任意扩展，可以根据需求制定对应的规范和API。
  2.便于统一定制开发规范。（模块化，组件化，规范化，自动化）
  3.减少升级带来的风险。（配置是自己从0到一配置的，升级起来坑很少）
  4.更好的维护框架以及配置。更加适合项目需求
  5.可以学习框架知识（raect，router，webpack，ts，babel，等）
  前端工程化包括前端的模块化、组件化、规范化，自动化，前端性能优化，前端性能监控等一系列知识
  包括但不限于脚手架、组件库、工具库、私有仓库、接口系统、文档系统、监控系统、CICD等
  🍒前端工程化是其主要目的为了提高效率和降低成本
    1.模块化 （作用： 隔离作用域，提供复用性，提高可维护性，解决命名冲突，抽离公共代码）
      JS模块化方案 AMD/CMD/CommonJS/ES6 Module等等 CSS模块化方案 css modules
    2.组件化 （UI组件，容器逻辑组件，权限组件，基础组建，通用组建，工具） （模块化只是在文件层面上，对代码和资源的拆分；组件化是在设计层面上，对于UI的拆分）
    3.规范化 包括的规范有
      》目录结构的制定，编码规范化，前后端接口规范，需求文档规范化，git分支管理，组件库文档规范，Commit提交描述规范，codeReview规范
    4.自动化 （自动化构建，webpack，vite，rullup、自动化部署、自动化测试等等CICD）
    5.前端性能优化（代码优化，构建工具优化，网络层面优化），
    6.性能监控（用户数据监控，页面性能监，控异常监控，）
🔥🔥基于这个框架模版，做成适用h5以及web端的脚手架，发布到公司的私服上，提高复用性。
   集成埋点系统，与jssdk并且给出案例调用方式，提升开发效率
🔥🔥调研ElasticSearch搜索与分析的技术，对接ElasticSearch查询，封装查询语法，提高查询效率。
  es是一种分布式的海量数据搜索与分析的技术，用于对海量的数据进行近实时的数据分析，分布式执行数据存储，搜索和分析
🔥🔥调研可视化图表，对图表进行二次封装成组建库,提升组件可维护性，扩展性，复用率。 echarts
  图表组建库（recharts）React 和 D3 构建的图表库
🔥🔥优化项目质量，减少项目编译时间，构建时间，减小包大小，提高网站的性能。
  项目时用webpack搭建的，结合raect代码优化。代码层面，构建工具层面，网络层面
🔥🔥带领团队参加需求评审，参与需求开发，指定排期，推动项目按时上线，提高项目交付质量和效率。
    🌰目标 1.把控需求 （调研需求， 参与评审，提出意见，UI，交互评审，后端接口评审，调研需求，排期）
    2.技术方案设计 （需求指导设计，设计指导开发。）
    3.开发（作为技术负责人，不应该把自己的主要精力放在代码开发上，但也不能完全不写代码。）
      应该去写一些通用能力，核心功能，底层逻辑的代码。其他比较简单的业务代码，可以交给项目成员来完成。
    4.监督代码质量（制定代码规范， 定期组织代码审核， CI 时使用自动化单元测试）
    5.跟踪进度 （每天都组织 10 分钟站会，收集当前的进度、风险和问题。如有延期风险，要及时汇报。）
      不仅仅要关心前端开发的进度，还要关心上下游。例如上游的 UI 设计图延期，将会导致前端开发时间不够，进而导致测试时间不够，甚至整个项目延期。
    6.稳定安全的运行(监控数据，用户数据，性能数据，异常数据)
🔥🔥推动项目CI/CD构建前端自动化部署项目。优化了构建流程，提升了部署效率
    🌰jenkins+gitlab搭建持续集成持续交付持续部署
    ​简单的说，就是在本地更改代码—>git push推送到代码托管—>自动安装依赖，打包测试部署等（开发环境一般自动，生产环境一般是需要手动点击按钮上线
    打造自动化构建部署 CI /CD 流水线服务的工具我们这里用的是Jenkins
    cicd现在有不少服务，GitHub Actions，gitlab 的Gitlab-CI,gitee的Gitee Go，还有travis、Netlify等等
    为了方便部署和迁移等，我们要在docker上安装Jenkins
    如果你们公司没有 CICD 基础设置，那么你可以尝试 github 免费的 CICD 服务: github actions。
    公司一般以 gitlab CI 作为 CICD 工具，此时需要自建 gitlab Runner 作为构建服务器
 🔥🔥 推动项目code-review，编写代码风格指南，代码开发规范，保证代码的统一和健壮以及可维护性，提升开发效率。   
    🌰code review ================================================
    -主要是我code-review，看看是否是重复代码，通用代码，以及扩展性如何，还有使用的方法是不是es6语法，是否合理等，
    -箭头函数，以及可选链，用的是promise还是，async await，等等。解构复值扩展运算符等等
🔥🔥🔥🔥 🔥🔥🔥🔥调研SSO系统以及对接公司单点登录SSO验证中心，提高用户效率。   🌰对接公司单点登录
    1.用户访问web1系统 2.web1没有登录，就会跳转到sso系统， sso系统也没有登录就会弹出登录页面
    3.用户提交账户密码提交后，会将登陆状态写入sso的session
    4.并且会在浏览器中写入sso域下的cookie， sso系统登录完成后会生成以一个ticket
        然后跳转到web1系统页面，同时将ticket做位参数传递给web1系统
    5.Web1系统拿到ticket后，从服务端向sso发送请求，验证ticket是否有效，并且获取用户信息
        验证通过后，web1系统会将用户信息写入session并且设置web域下的cookie，
    6这样跨域单点登录就完成了。
    1.web2，由于web2也没有登录，所以这时候会跳转到sso，
    2.由于sso已经登录了，不需要输入账号密码进行验证，sso会直接生成ticket
    返回给web2， 从服务端向sso发送请求，验证ticket是否有效，并且获取用户信息
    验证通过后，app系统会将用户信息写入session并且设置web域下的cookie，
    用户向系统1发起注销请求---------
    系统1根据用户与系统1建立的会话id拿到令牌，向sso认证中心发起注销请求
    sso认证中心校验令牌有效，销毁全局会话，同时取出所有用此令牌注册的系统地址
    sso认证中心向所有注册系统发起注销请求
    各注册系统接收sso认证中心的注销请求，销毁局部会话
    sso认证中心引导用户至登录页面-----
    用户登录成功之后，会与sso认证中心及各个子系统建立会话，用户与sso认证中心建立的会话称为全局会话，
    用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过sso认证中心，全局会话与局部会话有如下约束关系
🔥🔥封装异步加载组件，权限通用组件，基于 antd 的组建二次封装组件，解决页面刷新 redux 状态丢失，提升页面组件化以及提升用户体验。
    1.react判断是否登录，路由进行重定向。
    2.用户是否有权限控制页面逻辑。比如页面中的报警订阅装置只有leader才可以触发，还有就是分配bug，pms等
    页面分享导致状态丢失 解决页面刷新redux状态数据丢失问题 **********************************
    解决页面刷新导致状态丢失，例如全局选择框
    1.redux-persist管理redux, 解决刷新redux数据丢失，redux-persist会将redux的store中的数据缓存到浏览器的localStorage中。
    2.存放在连接hash连接里面，保护，每次属性页面从url里面获取，然后在存储在redux里面。设url上的hash query react-router-redux
   `http://.domain/#/crash/?q={"global":{"st":"1","pt":"1","dt":"1","plgt":"0"},"date":[1497888100000,1498014000000],"crash":{"crtt":"1"}}` 
   网页对url有长度限制，这时候我们只能存储关键的数据
🔥🔥封装统计SDK(数据监控，性能监控，异常监控)，保证项目的数据采集以及监控项目质量。
    所谓sdk就是一个工具类库而已，只是底层帮我们封装了一些事件方便我们使用。
    简单：前端埋点大致可分为数据监控、性能监控、错误监控。其中数据监控包括监控pv以及自定义事件的监控。
    性能监控可以使用浏览器给我们提供的performance api。
    而错误监控我们可以监听window对象的error事件以及监听promise没有catch情况的unhandlerejected api。
    其中需要注意的是我们必须使用img等来进行上报，因为img标签不会跨域且兼容性较好。
🍎项目难点
在React项目中，我们经常会通过redux来存储和管理全局数据。但是通过redux存储全局数据时，
会有这么一个问题，如果用户刷新了网页，那么我们通过redux存储的全局数据就会被全部清空，页面分享导致状态丢失 
解决页面刷新导致状态丢失，比如：全局选择框
1.redux-persist管理redux, 解决刷新react-redux数据丢失！ 。redux-persist会将redux的store中的数据缓存到浏览器的localStorage中。
   分享时候怎么办
2.存放在连接hash连接里面，保护，每次刷新从页面从url里面获取，然后在存储在redux里面。 设置 url 上的 hash query react-router-redux
## 举例
`http://.domain/#/crash/?q={"global":{"st":"1","pt":"1","dt":"1","plgt":"0"},"date":[1497888100000,1498014000000],"crash":{"crtt":"1"}}` 
🌰 本地页面刷新，导致state丢失
   1.何时存，只要用户刷新或者关闭页面时，都会默默记下当前的state状态。
   window.onbeforeunload = (e) => {
     const state = store.getState();
     saveState(state);
   };
   2.何时清空
   当再次发布新版本代码后，问题就来了。
   新代码维护的state和之前的结构不一样，用户用新的代码，读取自己本地缓存的旧的state，难免会出错。 然而用户此时无论怎么操作，都不会清楚掉自己本地缓存的state
   解决就是，state需要有个版本管理，当和代码的版本不一致时，至少进行个清空操作。代码的version更新到state。
   读取state的时候，则要比较代码的版本和state的版本
🌰 分享页面给同事倒是页面状态丢失
    存放在连接hash连接里面，刷新，每次属性页面从url里面获取，然后在存储在redux里面。
https://juejin.cn/post/7065483941305647112#heading-90 
 
