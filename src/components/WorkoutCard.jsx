import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";

const WorkoutCard = ({item}) => {
    return (
        <Link
        href={`/exercise/${item.id}`}
        key={item.id}
        className="bg-[#12151a] pointer hover:border-lg rounded-2xl overflow-hidden border border-gray-800/60 flex flex-col justify-between hover:border-gray-700 transition-all duration-300"
        >

        <div className="relative w-full h-52 bg-gray-900">
            <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            />
        </div>
        
        <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
                
            <div className="flex flex-wrap gap-2 mb-3">
                {item.muscleGroups?.map((muscle, idx) => (
                <span
                    key={idx}
                    className="bg-[#a3e635] text-black text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md"
                >
                    {muscle}
                </span>
                ))}
            </div>
            
            <h3 className="text-lg font-black uppercase text-white tracking-wide">
                {item.name}
            </h3>
            <p className="text-xs text-gray-400 mt-0.5 mb-4">
                {item.equipment}
            </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 border-t border-gray-800/80 pt-3 mt-2">
            <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{item.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-gray-400" />
                <span>{item.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-gray-400 fill-gray-400" />
                <span>{item.rating}</span>
            </div>
            </div>
        </div>

        </Link>
    )
}

export default WorkoutCard;