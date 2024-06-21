const ImgAtm = ({ srcProp, altProp, ...props }) => {
  return (
    <img
      className={`img-root ${props.className}`}
      src={srcProp}
      alt={altProp}
    />
  );
};
export default ImgAtm;
