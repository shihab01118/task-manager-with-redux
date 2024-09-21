import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTask(data));
    handleCancel();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add New Task">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="rounded-md"
            {...register("title", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            className="rounded-md"
            {...register("description", { required: true })}
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="date">Deadline</label>
          <input
            type="date"
            id="date"
            className="rounded-md"
            {...register("deadline", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="assign-to">Assign To</label>
          <select
            id="assign-to"
            className="rounded-md"
            {...register("assignedTo", { required: true })}
          >
            <option value="Shahed Al Amin Shihab">Shahed Al Amin Shihab</option>
            <option value="Maisha Tabassum Oishi">Maisha Tabassum Oishi</option>
            <option value="Atik Shahriar">Atik Shahriar</option>
            <option value="Faysal Neowaz">Faysal Neowaz</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            className="rounded-md"
            {...register("priority", { required: true })}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => handleCancel()}
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
