import NavBar from '../components/NavBar.js';
import StackedWaves from '../svg-background/StackedWaves1.svg';

function AboutPage() {
	return(
		<div>
			<NavBar pageName="about"/>
			<div style={ { backgroundImage: `url(${StackedWaves})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'} } className="w-screen h-[1000px]">
				  <h1 className="pt-60 text-center text-8xl font-Beau-Rivage text-white">About the Project</h1>
				  <p className='text-white pt-20 px-40 text-xl font-Source-Serif-Pro font-[800]'>
				  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet vestibulum nisi porta sollicitudin. Donec rhoncus massa et risus volutpat pulvinar. Maecenas nec quam ultrices, lacinia turpis at, rutrum magna. Donec finibus nulla eget vehicula lobortis. Morbi congue tortor non venenatis posuere. Pellentesque aliquet vitae nulla quis viverra. Mauris dolor elit, ultrices vitae risus in, ullamcorper fringilla arcu. Sed rutrum elementum justo vel congue. Suspendisse potenti. Pellentesque tempus placerat fermentum. Sed leo nisi, commodo non orci nec, lobortis ullamcorper leo. Nam ultricies facilisis erat quis dignissim. Ut ac feugiat erat. Pellentesque rhoncus venenatis orci, fermentum cursus odio cursus in.
				  </p>
			</div>
			<div style={ { backgroundImage: `url(${StackedWaves})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'} } className="w-screen h-[1000px]">
				  <p className='text-white pt-80 px-40 text-xl font-Source-Serif-Pro font-[800]'>
				  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet vestibulum nisi porta sollicitudin. Donec rhoncus massa et risus volutpat pulvinar. Maecenas nec quam ultrices, lacinia turpis at, rutrum magna. Donec finibus nulla eget vehicula lobortis. Morbi congue tortor non venenatis posuere. Pellentesque aliquet vitae nulla quis viverra. Mauris dolor elit, ultrices vitae risus in, ullamcorper fringilla arcu. Sed rutrum elementum justo vel congue. Suspendisse potenti. Pellentesque tempus placerat fermentum. Sed leo nisi, commodo non orci nec, lobortis ullamcorper leo. Nam ultricies facilisis erat quis dignissim. Ut ac feugiat erat. Pellentesque rhoncus venenatis orci, fermentum cursus odio cursus in.
				  </p>
			</div>
			<div style={ { backgroundImage: `url(${StackedWaves})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'} } className="w-screen h-[1000px]">
				  <p className='text-white pt-80 px-40 text-xl font-Source-Serif-Pro font-[800]'>
				  	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi laoreet vestibulum nisi porta sollicitudin. Donec rhoncus massa et risus volutpat pulvinar. Maecenas nec quam ultrices, lacinia turpis at, rutrum magna. Donec finibus nulla eget vehicula lobortis. Morbi congue tortor non venenatis posuere. Pellentesque aliquet vitae nulla quis viverra. Mauris dolor elit, ultrices vitae risus in, ullamcorper fringilla arcu. Sed rutrum elementum justo vel congue. Suspendisse potenti. Pellentesque tempus placerat fermentum. Sed leo nisi, commodo non orci nec, lobortis ullamcorper leo. Nam ultricies facilisis erat quis dignissim. Ut ac feugiat erat. Pellentesque rhoncus venenatis orci, fermentum cursus odio cursus in.
				  </p>
			</div>
		</div>
	)	
}

export default AboutPage;
