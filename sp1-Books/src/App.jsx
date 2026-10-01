import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  
  

  return (
    <div>
      <form>
        <div class="form-group">
        <label for="bookTitle">Tytuł książki</label>
        <input type="text" class="form-control" id="bookTitle" />
        </div>
        <div class="form-group">
        <label for="bookAuthor">Autor książki</label>
        <input type="text" class="form-control" id="bookAuthor" />
        </div>
        <div class="form-group">
        <label for="bookGenre">Gatunek</label>
        <input type="text" class="form-control" id="bookGenre" />
        </div>
        <button type="button" class="btn btn-primary">Dodaj</button>
      </form>
    </div>
  )
};

export default App
