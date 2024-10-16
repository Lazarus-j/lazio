import '../css/alert.css';

const Masking = ({mask}) => {
    // console.log('Need masking   ',mask)
    return (
        <div className={`masking ${mask ? 'mask' : 'unMask'}`} id="mask">
            <div className="loading" id="load"></div>
        </div>);
}

export default Masking;