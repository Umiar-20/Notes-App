import { useState } from "react";
import TagInput from "../../components/Input/TagInput";

const AddEditNotes = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  return (
    <div>
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

      {/* start of add button */}
      <button className="btn-primary font-medium mt-5 p-3" onClick={() => {}}>
        Add
      </button>
      {/* end of add button */}
    </div>
  );
};
export default AddEditNotes;
