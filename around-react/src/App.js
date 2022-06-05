import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<div class="page">
				<header class="header">
					<img
						className="header__image"
						src={"<%=require('./images/header.svg')%>"}
						alt="Around the United States"
					/>
				</header>
				<main>
					<section class="profile">
						<div class="profile__avatar">
							<div class="profile__overlay">
								<button type="button" class="profile__change-photo"></button>
							</div>
							<img class="profile__avatar-pic" src=" " alt="profile picture" />
						</div>
						<div class="profile__info">
							<h1 class="profile__name">Pedro Nepomuceno</h1>
							<p class="profile__text">Explorer</p>

							<button
								aria-label="Edit"
								type="button"
								class="profile__edit"></button>
						</div>

						<button
							aria-label="Add"
							type="button"
							class="profile__plus"></button>
					</section>
					<section class="elements"></section>
				</main>
				<footer class="footer">
					<p class="footer__text">© Pedro Nepomuceno.</p>
				</footer>
				<div class="popup popup_type-edit_profile" id="edit-popup">
					<div class="popup__content">
						<button class="popup__close" type="button"></button>
						<h3 class="popup__title">Edit Profile</h3>
						<form
							id="profile-form"
							class="popup__form"
							name="edit profile"
							novalidate>
							<input
								name="name"
								type="text"
								placeholder="name"
								class="popup__input popup__input_type_name"
								id="name"
								required
								minlength="2"
								maxlength="40"
							/>
							<span class="popup__error" id="name-error"></span>
							<input
								name="about"
								type="text"
								placeholder="About me"
								class="popup__input popup__input_type_description"
								id="description"
								required
								minlength="2"
								maxlength="200"
							/>
							<span class="popup__error" id="description-error"></span>

							<button type="submit" class="popup__submit" disabled>
								Save
							</button>
						</form>
					</div>
				</div>
				<div class="popup" id="add-popup">
					<div class="popup__content">
						<button class="popup__close" type="button"></button>
						<h3 class="popup__title">New Place</h3>
						<form id="add-form" class="popup__form" name="add place" novalidate>
							<input
								name="name"
								id="title"
								type="text"
								placeholder="Title"
								class="popup__input"
								required
								minlength="3"
								maxlength="30"
							/>
							<span class="popup__error" id="title-error"></span>

							<input
								name="link"
								id="url"
								type="url"
								placeholder="Link"
								class="popup__input"
								required
								minlength="6"
							/>
							<span class="popup__error" id="url-error"></span>

							<button type="submit" class="popup__submit" disabled>
								Create
							</button>
						</form>
					</div>
				</div>
				<div class="popup" id="photo">
					<div class="popup__content popup__content_type_image">
						<button class="popup__close" type="button"></button>

						<img class="popup__image" src=" " alt=" " />

						<p class="popup__caption"></p>
					</div>
				</div>
				<div class="popup" id="delete-popup">
					<div class="popup__content popup__content_type_delete">
						<button class="popup__close" type="button"></button>
						<h3 class="popup__title">Are you sure?</h3>

						<button
							type="submit"
							class="popup__submit popup__submit_type_delete">
							Yes
						</button>
					</div>
				</div>
				<div class="popup" id="edit-popupPicture">
					<div class="popup__content popup__content_type_edit">
						<button class="popup__close" type="button"></button>
						<h3 class="popup__title">Change profile picture</h3>
						<form
							id="add-profile"
							class="popup__form"
							name="add avatar"
							novalidate>
							<input
								name="avatar"
								id="avatar"
								type="url"
								placeholder="Link"
								class="popup__input"
								required
								minlength="6"
							/>
							<span class="popup__error" id="avatar-error"></span>
							<button type="submit" class="popup__submit" disabled>
								Save
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
