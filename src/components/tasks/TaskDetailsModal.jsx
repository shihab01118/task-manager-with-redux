import { useSelector } from "react-redux";
import Modal from "../ui/Modal";


const TaskDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
    const {userTasks} = useSelector((state) => state.tasksSlice);

    const task = userTasks.find((task) => task.id === taskId);
    console.log(task)
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Task Details">
            
        </Modal>
    );
};

export default TaskDetailsModal;