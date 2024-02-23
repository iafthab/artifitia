const SideBar = () => {
  return (
    <div>
      <h1>Categories</h1>
      <h2>All Categories</h2>
      <details>
        <summary>Laptop</summary>
        <input type="checkbox" name="hp" id="hp" />
        HP
        <input type="checkbox" name="hp" id="hp" />
        Dell
      </details>
      <details>
        <summary>Tablet</summary>
        <input type="checkbox" name="hp" id="hp" />
        HP
        <input type="checkbox" name="hp" id="hp" />
        Dell
      </details>
      <details>
        <summary>Headphones</summary>
        <input type="checkbox" name="hp" id="hp" />
        HP
        <input type="checkbox" name="hp" id="hp" />
        Dell
      </details>
    </div>
  );
};

export default SideBar;
