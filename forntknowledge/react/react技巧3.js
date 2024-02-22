react中引入css的方式有哪些
在 React 中，有几种方式可以引入 CSS 样式：

内联样式（Inline Styles）：

在React中，可以使用内联样式，即在JSX元素的style属性中直接写入样式对象。样式对象的属性名采用驼峰命名法。
jsx
const MyComponent = () => {
  const styles = {
    color: 'red',
    fontSize: '16px'
  };

  return <div style={styles}>Hello World</div>;
};
普通的外部样式表：

在 React 中，你可以使用普通的外部样式表（通常以.css为后缀），然后在组件中引入。可以通过import语句引入样式表，然后在 JSX 中应用对应的类名。
jsx
import './MyComponent.css';

const MyComponent = () => {
  return <div className="my-component">Hello World</div>;
};
CSS 模块：

CSS 模块是一种让 CSS 文件仅对一个组件有效的技术。使用 CSS 模块，你可以通过import将样式对象引入到组件中，然后使用对象中的类名。
jsx
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return <div className={styles.myComponent}>Hello World</div>;
};
内联样式字符串：

你也可以直接将样式字符串作为一个属性传递给 JSX 元素。
jsx
const MyComponent = () => {
  const styles = 'color: red; font-size: 16px;';

  return <div style={styles}>Hello World</div>;
};
这些方法可以根据项目的需求和个人喜好来选择，每种方式都有其适用的场景。



[React 进阶] 掌握 React TypeScript
https://juejin.cn/post/7328970140879798313