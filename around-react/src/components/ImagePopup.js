function ImagePopup(props) {
	return (
		<div className="popup" id="photo">
			<div className="popup__content popup__content_type_image">
				<button className="popup__close" type="button"></button>

				<img className="popup__image" src={props.src} alt={props.alt} />

				<p className="popup__caption"></p>
			</div>
		</div>
	);
}
export default ImagePopup;
