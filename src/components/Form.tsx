import { lazy } from 'react'
import { Button } from '../components'
import { useFormFeeling } from '../hooks'

const FeelingResult = lazy(() => import('./FeelingResult'))

export function Form() {
	const { promptData, loading, onSubmit, playlist } = useFormFeeling()

	return (
		<form onSubmit={onSubmit} className='flex flex-col gap-5 mt-10 relative w-full md:w-[600px]'>
			<h1 className='leading-tight relative mb-3 md:mb-4 sm:px-2 md:px-4 z-30 text-4xl sm:text-[50px] md:text-[60px] font-bold text-center'>
				Tell me, <span className='text-mixin-100'>how</span> was your{' '}
				<span className='text-mixin-100'>day</span>?
			</h1>

			<div className='h-44'>
				<div className='relative h-full'>
					<textarea
						required
						id='feeling'
						className='focus:animate-visual absolute z-20 left-0 top-0 bottom-0 right-0 text-mixin-400 resize-none w-full h-full p-5 rounded-md font-semibold outline-none'
						name='inputFeeling'
						placeholder='...'
					/>
					<div className='absolute z-10 rounded-[20px] h-44 w-full bg-textarea bg-[length:10px_10px] text-mixin-200 opacity-40 -left-6 top-5' />
				</div>
			</div>

			<Button className='relative mt-8' label='Send Feeling' type='submit' disabled={loading} />

			<FeelingResult feelingClassified={promptData.label} existsPlaylist={playlist.length > 0} />
		</form>
	)
}
