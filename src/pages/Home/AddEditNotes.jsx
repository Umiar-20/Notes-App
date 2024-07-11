import { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const AddEditNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  // start of function add Note
  const addNewNote = async () => {};
  // end of function add Note

  //   start of function edit note
  const editNote = async () => {};
  //   end of function edit note

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter your note's title");
      return;
    }

    if (!content) {
      setError("Oops you need to write down the content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center rounded-full w-10 h-10 absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>

      {/* start of the Title input */}
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      {/* End Of the Title Input */}

      {/* Start of Content Input */}
      <div className="flex flex-col mt-4 gap-2">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>
      {/* end of content input */}

      {/* start of adding label of the content */}
      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {/* end of adding label to the content */}

      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

      {/* start of add button */}
      <button
        className="btn-primary font-medium mt-5 p-3"
        onClick={handleAddNote}
      >
        Add
      </button>
      {/* end of add button */}
    </div>
  );
};

TagInput.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func.isRequired,
};
export default AddEditNotes;
