forwardRef
forwardRef：引用传递，是一种通过组件向子组件自动传递引用ref的技术。对于应用者的大多数组件来说没什么作用，但对于一些重复使用的组件，可能有用。
听完介绍是不是感觉云里雾里的，官方对forwardRef的介绍也很少，我们来看看转发的问题
在React中，React不允许ref通过props传递，因为ref是组件中固定存在的，在组件调和的过程中，会被特殊处理，而forwardRef就是为了解决这件事而诞生的，让ref可以通过props传递
举个栗子🌰：父组件想要获取孙组件上的信息，我们直接用ref传递会怎样：
import React, { Component, forwardRef } from 'react';

const Son = ({sonRef}) => {
    return <div>
        <p>孙组件</p>
        <p ref={sonRef}>大家好，我是小杜杜～</p>
    </div>
}

const Child = ({ childRef }) => {
    return <div>
       <div>子组件</div>
        <Son sonRef={childRef} />
    </div>
}

const ForwardChild = forwardRef((props, ref) => <Child childRef={ref} {...props} />)

class Index extends Component{

  constructor(props){
    super(props)
  }
  node = null

  componentDidMount(){
      console.log(this.node)
  }

  render(){
    return <div style={{padding: 20}}>
        <div>父组件</div>
        <ForwardChild ref={(node) => this.node = node} />
    </div>
  }
}
 
export default Index;

作者：小杜杜
链接：https://juejin.cn/post/7124486630483689485
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。