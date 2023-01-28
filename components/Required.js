function Required({hidden}) {
  return <span className={`${hidden ? 'text-white' : 'text-red-500' } font-semibold text-xl`}> *</span>;
}

export default Required;
