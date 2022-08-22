import Button from "./Button";

Button.install = (App) => {
  App.component(Button.name,Button)
}
// 导出Button组件
export default Button;
