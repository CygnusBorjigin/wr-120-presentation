const TeamMember = (props) => {
	const { name, description } = props;

	return(
		<div className="h-80 w-screen flex flex-row font-Antic-Slab text-white mt-20 text-2xl">
			<p className="basis-1/6 text-center my-10">
				{ name }
			</p>
			<p className="basis-5/6 text-center my-10">
				{ description }
			</p>
		</div>
	)
}

export default TeamMember;
