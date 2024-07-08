import { Skeleton } from '@/components/ui/skeleton'

export const SkeletonTable = () => {

    return (
        <div>
            <div className='flex flex-col gap-2'>
                {Array.from({ length: 16 }, (item, index) => (
                    <div className='flex mx-5 justify-around gap-8' key={index}>
                        <Skeleton className='w-5 h-10' />
                        <Skeleton className='w-25 h-10' />
                        <Skeleton className='w-32 h-10 mr-20' />
                        <Skeleton className='w-14 h-3' />
                    </div>
                ))}
            </div>
        </div>
    )
}