
import Welcome from './components/Welcome';
import Message from './components/Message'
import { Userdetails } from './components/UserDetails';
import { Lists } from './components/RenderingLists';
import Clickable from './components/Clickable';
import Onchange from './components/Onchange';
import OnMouse from './components/OnMouse';
import FormSubMit from './components/Submit';
import { Contact } from './components/Contact';
import { NewsLetter } from './components/Newsletter';
import { UseState } from './components/UseState';
import { Login } from './components/Login';
import { Todo } from './components/Todo';
import MyComponent from './components/MyComponent';
import Useref from './components/useref';
import Usememo from './components/Usememo';
import ComponentA from './components/ComponentA';



function App() {
  return (
    <div>
      <Message></Message>
      <h1>Condtion rendering</h1>
      <Userdetails name="raja" Isonline={true} hiddeoffline={true} role={"admin"}></Userdetails>
      <Lists></Lists>
      <Clickable></Clickable>
      <Onchange></Onchange>
      <OnMouse></OnMouse>
      <FormSubMit></FormSubMit>
      <p>parent-child props using button</p>
      <Contact></Contact>
      <NewsLetter></NewsLetter>
      <UseState></UseState>
      <Login></Login>
      <Todo></Todo>
      <p>use Effect</p>
      <MyComponent></MyComponent>

      <Useref></Useref>
      <Usememo></Usememo>
      <ComponentA></ComponentA>



    </div>
  );
}

export default App;
