import Image from 'next/image'
import MedalBronze from '../../assets/Medal_bronze.svg'
import MedalGold from '../../assets/Medal_gold.svg'
import MedalPrata from '../../assets/Medal_prata.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2>Ranking de Indicações</h2>
      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Daniel Cardoso
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1050
          </span>
          <Image src={MedalGold} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Daniel Cardoso
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1050
          </span>
          <Image src={MedalPrata} alt="" className="absolute top-0 right-8" />
        </div>
        <div className="relative rounded-xl bg-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Daniel Cardoso
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1050
          </span>
          <Image src={MedalBronze} alt="" className="absolute top-0 right-8" />
        </div>
      </div>
    </div>
  )
}
