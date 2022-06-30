import React from "react";
import { currentUserContext } from "../contexts/CurrentUserContext.js";

export function Card({ card, onCardClick, onCardLike, onCardDelete }) {
	const currentUser = React.useContext(currentUserContext);

	const isOwn = card.owner._id === currentUser._id;
	const cardDeleteButtonClassName = `elements__delete ${
		isOwn ? "elements__delete" : "elements__delete_hidden"
	}`;
	const isLiked = card.likes.some((user) => user._id === currentUser._id);

	const cardLikeButtonClassName = `elements__info-button ${
		isLiked ? "elements__info-button_active" : "elements__info-button"
	}`;

	function handleDeleteClick() {
		onCardDelete(card);
	}

	function handleLikeClick() {
		onCardLike(card);
	}

	function handleCardClick() {
		onCardClick(card);
	}
	return (
		<div className="elements__photo">
			<img
				className="elements__pic"
				onClick={handleCardClick}
				src={card.link}
				alt={card.name}
			/>
			<button
				onClick={handleDeleteClick}
				type="reset"
				className={cardDeleteButtonClassName}></button>
			<div className="elements__info">
				<h2 className="elements__info-text">{card.name}</h2>
				<div className="elements__like">
					<button
						type="button"
						onClick={handleLikeClick}
						className={cardLikeButtonClassName}></button>
					<p className="elements__counter">{card.likes.length}</p>
				</div>
			</div>
		</div>
	);
}
export default Card;
