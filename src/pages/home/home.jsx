import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import {
	HomePageWrapper,
	BannerWrapper,
	BannerTitle,
	BannerSubtitle,
	BannerButtonWrapper,
} from './home.styles';
import useGetData from '../../api/useGetData';
import { Button as RTSButton, Container, NavLink } from 'reactstrap';
import profilePic from '../../images/profile_picture.png';
import {
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../../api/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
	const { t } = useTranslation();
	useGetData();
	return (
		<HomePageWrapper>
			<BannerWrapper>
				<div>
					<img src={profilePic} alt="kiran profile pic"/>
				</div>
				<Fade bottom cascade>
					<BannerTitle>Kiran</BannerTitle>
					<BannerSubtitle>{t('job_role')}</BannerSubtitle>
					<div className='home-social'>
						<a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label='linkedin'>
							<FontAwesomeIcon icon={faLinkedin}/>
						</a>
						<a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label='github'>
							<FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
				</Fade>
			</BannerWrapper>
			<Container>
					<BannerButtonWrapper>
						<div>
						<RTSButton outline target="_blank" href='kiran_resume_2023.pdf'>
							{t('donoload_resume')} &nbsp; <FontAwesomeIcon icon={faDownload} />
						</RTSButton>
					</div>
					<div>
						<RTSButton outline>
							<NavLink href="/contact">
									{t("contact_me")} &nbsp; <FontAwesomeIcon icon={faArrowRight}/>
							</NavLink>
						</RTSButton>
					</div>
				</BannerButtonWrapper>
				<p className="homepage_intro"> { t('home_page_intro')}</p>
			</Container>
		</HomePageWrapper>
	);
};
export default Home;

// https://mattfarley.ca/
