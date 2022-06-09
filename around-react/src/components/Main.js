function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick }) {
	return (
		<main>
			<section className="profile">
				<div className="profile__avatar">
					<div className="profile__overlay">
						<button
							type="button"
							onClick={onEditAvatarClick}
							className="profile__change-photo"></button>
					</div>
					<img className="profile__avatar-pic" src=" " alt="profile picture" />
				</div>
				<div className="profile__info">
					<h1 className="profile__name">Pedro Nepomuceno</h1>
					<p className="profile__text">Explorer</p>

					<button
						onClick={onEditProfileClick}
						aria-label="Edit"
						type="button"
						className="profile__edit"></button>
				</div>

				<button
					onClick={onAddPlaceClick}
					aria-label="Add"
					type="button"
					className="profile__plus"></button>
			</section>
			<section className="elements"></section>
		</main>
	);
}
export default Main;
