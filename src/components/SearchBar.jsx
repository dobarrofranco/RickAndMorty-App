export default function SearchBar({onSearch}) {
   
   const searchFunc = () => {
      let searchInput = document.getElementById("searchInput");
      onSearch(searchInput.value);
      searchInput.value = ""; 
   }

   return (
      <div>
         <input type='search' id="searchInput"/>
         <button onClick={()=>{
            searchFunc();
         }}>Agregar</button>
      </div>
   );
}
