import "./App.css";


import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Catverse } from "./pages/home/Catverse";
import {
  Profile,
  Following,
  Followers,
  Likes,
} from "./pages/profile/Profile";
import { NewMessages, EventsTwo } from "./pages/messages/Messages";
import Messages from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import Post from "./components/post/Post";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/catverse" exact component={Catverse} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/following/following" exact component={Following} />
        <Route path="/followers/followers" exact component={Followers} />
        <Route path="/likes/likes" exact component={Likes} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/newmessage" exact component={NewMessages} />
        <Route path ="/eventstwo" exact component={EventsTwo}/>
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </Router>
  );
}
  
export default App;