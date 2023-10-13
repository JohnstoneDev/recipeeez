// lib imports
import { motion } from 'framer-motion'

// local imports
import { Container } from './Container'

export const HomeComponent = () => {
	return (
		<Container>
			<motion.h1 className='font-heading text-heading text-center'>This is the way</motion.h1>
			<p className='text-center'>May the force be with you!</p>
		</Container>
	)
}