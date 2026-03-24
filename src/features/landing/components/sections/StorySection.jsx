import { useState, useRef, Suspense } from 'react';
import ReactPlayer from 'react-player';
import style from './StorySection.module.css';
import vid from '../../../../assets/vid.mp4'
import { motion } from 'framer-motion';

/**
 * StorySection
 * Story/About section with:
 * - Left: Headline, description, info badges
 * - Right: Mission statement card with metrics and video
 * - Responsive: 2 cols desktop, 1 col mobile
 * - Video with error handling and proper React Player config
 */
export function StorySection() {
    const [videoError, setVideoError] = useState(false);
    const playerRef = useRef(null);

    /**
     * Handle video player errors
     */
    const handleVideoError = (error) => {
        console.error('Video player error:', error);
        setVideoError(true);
    };

    const handleReady = () => {
        if (document.pictureInPictureEnabled && playerRef.current) {
            const videoElement = playerRef.current.getInternalPlayer();

            if (videoElement && videoElement instanceof HTMLVideoElement) {
                // Function to handle the actual PiP request

            }
        }
    }

    return (
        <section
            id="story"
            className="bg-black position-relative d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <div className={style.blurCercilBg}></div>
            <div className={style.contentWrapper}>
                <div className="row g-5 align-items-start ">
                    {/* LEFT COLUMN */}
                    <div className="col-12 col-lg-6">
                        <div className={style.leftColumn}>
                            {/* Badge */}
                            <div className={style.storyBadge}>
                                Our Story
                            </div>

                            {/* Headline */}
                            <motion.h2 className={style.headline}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                                viewport={{ once: true }}>
                                Architecting the <span className="text-orange-lumos">Future</span> of Human Mobility
                            </motion.h2>

                            {/* Description */}
                            <motion.p className={style.description}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                                viewport={{ once: true }}>
                                Founded at the intersection of empathy and deep tech, Team Nova is dedicated to breaking barriers for the visually impaired. We don't just build hardware; we craft intelligent companions that help people navigate the world with confidence and dignity.
                            </motion.p>

                            {/* Info Badges */}
                            <motion.div className={style.infoBadges}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                                viewport={{ once: true }}>
                                <div className={style.infoBadge}>
                                    <span className={style.infoBadgeLabel}>Established</span>
                                    <span className={style.infoBadgeValue}>2026 // GRAD_PROJ</span>
                                </div>
                                <div className={style.infoBadge}>
                                    <span className={style.infoBadgeLabel}>Location</span>
                                    <span className={style.infoBadgeValue}>Alexandria // EGYPT</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-12 col-lg-5 offset-lg-1">
                        <motion.div className={style.missionCard}
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                            viewport={{ once: true }}>
                            <div className={style.missionStar}></div>

                            {/* Mission Header */}
                            <div className={style.missionHeader}>
                                <span className={style.missionDot} />
                                Mission Statement.
                            </div>

                            {/* Mission Text */}
                            <p className={style.missionText}>
                                To illuminate the path for millions through human-centric assistive technology. We believe the future of AI isn't just compute it's empowerment.
                            </p>

                            {/* Metrics */}
                            <div className={style.metricsContainer}>
                                <div className={style.metricRow}>
                                    <span className={style.metricLabel}>Detection Accuracy</span>
                                    <span className={style.metricValue}>99.2%</span>
                                </div>
                                <div className={style.metricRow}>
                                    <span className={style.metricLabel}>Haptic Response</span>
                                    <span className={style.metricValue}>0.02ms</span>
                                </div>
                                <div className={style.metricRow}>
                                    <span className={style.metricLabel}>Battery Life</span>
                                    <span className={style.metricValue}>OPTIMIZED (12h+)</span>
                                </div>
                            </div>

                            {/* VIDEO PLAYER */}
                            <div
                                className={`w-100 d-flex justify-content-center align-items-center rounded-2 overflow-hidden ${style.videoBorder}`}
                                style={{ aspectRatio: '16/9', backgroundColor: '#0a0a0a', minHeight: '200px' }}
                            >
                                {videoError ? (
                                    <div className={style.videoError}>
                                        <p>⚠️ Video unavailable</p>
                                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Please check the file path or use Solution 2 (hosting)</p>
                                    </div>
                                ) : (
                                    <Suspense fallback={<div className={style.videoLoader}>Loading video...</div>}>
                                        <ReactPlayer
                                            ref={playerRef}
                                            url={vid}
                                            controls={true}
                                            width='100%'
                                            height='100%'
                                            playing={false}
                                            loop={false}
                                            muted={true}
                                            pip={false}
                                            onReady={handleReady}
                                            progressInterval={100}
                                            onError={handleVideoError}
                                            config={{
                                                file: {
                                                    attributes: {
                                                        controlsList: 'nodownload',
                                                        style: { width: '100%', height: '100%' }
                                                    }
                                                }
                                            }}
                                        />
                                    </Suspense>
                                )}
                            </div>

                            {/* Status Badge */}
                            <div className={`${style.statusBadge} glassmorphism`}>
                                <span className={style.statusIcon} />
                                <div className=' d-flex flex-column justify-content-center mx-2 px-2'>
                                    <span className='customGray'>
                                        System Status
                                    </span>
                                    ACTIVE_PROTOTYPE
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StorySection;