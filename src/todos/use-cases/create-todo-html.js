/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {

    if (!todo) throw new Error("El todo es obligatorio.");

    const {done, description, id} = todo;

    const 
    
    HTML = `

        <div class="view">

            <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
            <label>${description}</label>
            <button class="destroy"></button>

        </div>
        <input class="edit" value="Create a TodoMVC template">

    `,
    LI_ELEMENT = document.createElement("li");

    LI_ELEMENT.innerHTML = HTML;
    LI_ELEMENT.setAttribute("data-id", id);

    if (done) LI_ELEMENT.classList.add("completed");

    return LI_ELEMENT;

};