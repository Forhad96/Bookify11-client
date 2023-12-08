const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="text-center">
      <div className="font-tertiary text-[15px] uppercase tracking-[6px]">
        {subtitle}
      </div>
      <h2 className="mb-4 font-primary text-[32px] lg:text-[45px]"> {title}</h2>
    </div>
  );
};


import PropTypes from 'prop-types';

SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
export default SectionTitle;
