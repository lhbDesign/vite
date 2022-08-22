# Vue 3 + Vite

## event 使用方法
has
是否有某个事件

param (Function) evt -事件名称
return (Boolean)
on
添加事件，返回的是移除listener的函数

param (String) evt - 事件名称
param (Function) listener -事件处理函数
return (Function) -返回移除listener的函数
off
移除事件

param (String) evt -事件名称
param (Function) listener -事件处理函数
return (Boolean) -是否删除成功
once
只执行一次

emit
执行回调

param (String) evt -事件名称
param (...*) data -数据
getListeners
获取所有绑定的回调函数

param (String) evt -事件名称


