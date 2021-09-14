import {Route, Switch} from 'react-router-dom';
import BooksList from './BooksList/BooksList';
import CreateBook from './CreateBook/CreateBook';
import UpdateBook from './UpdateBook/UpdateBook';
import NavBar from './shared/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Switch>
    <Route path='/create-book'>
      <CreateBook />
    </Route>
    <Route path='/update-book/:id'>
      <UpdateBook />
    </Route>
      <Route path='/'>
        <BooksList />
      </Route>
    </Switch>
    </>
  );
}

export default App;
