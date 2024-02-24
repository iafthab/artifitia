const AddSubCategory = () => {
  return (
    <form className="font-montserrat font-semibold text-base space-y-4">
      <h3 className="text-xl text-center mx-auto">Add Sub Category</h3>
      <select
        className="outline-none border-2 text-grey  border-grey rounded-xl w-80 bg-transparent px-4 py-3"
        name="category"
        id="category"
      >
        <option defaultValue value="id">
          Select category
        </option>
        <option value="id">category1</option>
        <option value="id2">category2</option>
        <option value="id3">category3</option>
        <option value="id4">category4</option>
      </select>
      <br />
      <input
        type="text"
        name="subCategory"
        id="subCategory"
        placeholder="Enter sub category name"
        className="outline-none border-2 border-grey rounded-xl  placeholder:text-grey w-80 bg-transparent px-4 py-3"
      />
    </form>
  );
};

export default AddSubCategory;
