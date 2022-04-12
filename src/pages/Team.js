import NavBar from '../components/NavBar.js';
import BackGround from '../svg-background/TeamPageBG.svg';
import TeamMember from '../components/TeamMember.js';

const TeamPage = () => {
	return(
		<div>
			<NavBar pageName="team" />
			<div style={ { backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'} } className="w-screen h-[1000px]">
				  <h1 className="pt-60 text-center text-8xl font-Beau-Rivage text-white">The Team</h1>
				  <TeamMember name="Team Member 1" description="Someone somewhere" />
				  <TeamMember name="Team Member 2" description="Someone somewhere" />
				  <TeamMember name="Team Member 3" description="Someone somewhere" />
			</div>
			<div style={ { backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'} } className="w-screen h-[1000px]">
			</div>
		</div>
	)
}

export default TeamPage;
