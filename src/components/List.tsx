import { useState } from 'react';
import styleCreate from '../Create.module.css';
import { PlusCircle, ClipboardX } from 'lucide-react';

export function List() {
    const [listToDo, setListToDo] = useState<string[]>([]);
    const [textTask, setTextTask] = useState("");

    function handleInput() {
        setTextTask(event?.target?.value)        
    }

    function createTask(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        setListToDo([...listToDo, textTask]);
        setTextTask("");
    }

    return (
        <main>
            <form className={styleCreate.createForm} onChange={handleInput}>
                <input type='text' value={textTask} placeholder='Adicione uma nova tarefa'/>
                <button type='submit' onClick={createTask}>
                  Criar <PlusCircle />
                </button>
            </form>

            <div className={styleCreate.subTitle}>
                <p>Tarefas criadas <span>{listToDo.length}</span></p>
                <p>Concluídas <span>0</span></p>
            </div>
            
            <div>
            {
                !listToDo.length
                    ? <div className={styleCreate.noList}>
                        <ClipboardX />
                        <span>Você ainda não tem tarefas cadastradas </span>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                    : <div>
                    {listToDo.map(toDo => <p>{toDo}</p>)}
                    </div>
            }
            </div>
        </main>
    )
}