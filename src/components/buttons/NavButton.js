function NavButton(props) {
	const { text, func, page} = props;

	return(
		<button className="h-8 w-16 border-b-2 m-auto text-white font-Antic-Slab hover:text-xl transition-auto horver:w-20 bg-opacity-0"
			onClick={ func  }>
			<h3 className="text-center">
				{ text }
			</h3>
		</button>
	)
}

export default NavButton;
