const closeMenu = (menuObject?: HTMLElement) => {
	const menu =
		menuObject || (document.getElementById('menu-mobile') as HTMLElement);
	menu.classList.remove('active');
};

const handleClick = (e: MouseEvent) => {
	e.preventDefault();

	const menu = document.getElementById('menu-mobile') as HTMLElement;

	if (menu.classList.contains('active')) {
		closeMenu(menu);

		return;
	}

	menu.classList.add('active');
};

function handleClickMenu(this: unknown, e: MouseEvent) {
	if (this !== e.target) {
		return;
	}

	closeMenu();
}

const handleClickSearch = () => {
	const form = document.getElementById('search') as HTMLFormElement;
	const input = document.querySelector('#search > input') as HTMLInputElement;

	if (input.value.length > 0) {
		form.submit();

		return;
	}

	input.focus();
};

window.addEventListener('load', () => {
	(document.getElementById('mobile-menu') as HTMLElement).onclick = handleClick;
	(document.getElementById('menu-mobile') as HTMLElement).addEventListener(
		'click',
		handleClickMenu
	);
	(document.getElementById('search-button') as HTMLElement).onclick =
		handleClickSearch;
});

window.addEventListener('resize', () => closeMenu());
