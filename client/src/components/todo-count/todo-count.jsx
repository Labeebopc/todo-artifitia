import React from "react";
import "./todo-count.css"


const TodoCount = (props) => {
    return (
        <>
            <section className="todo-count-container">
                <article>
                    Pending Todos[{props.pending}]
                </article>
                <article>
                    Cancel Todos[{props.counts.cancel}]
                </article>
                <article>
                    Delete Todos[{props.counts.delete}]
                </article>
                <article>
                    Complete Todos[{props.counts.completed}]
                </article>
            </section>
        </>
    )
}
export default TodoCount;