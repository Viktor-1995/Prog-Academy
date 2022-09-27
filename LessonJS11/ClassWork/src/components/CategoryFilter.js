function CategoryFilter(category) {
    // console.log(category);
    return <option value={category.category}>{category.category}</option>;
}

export default CategoryFilter;
