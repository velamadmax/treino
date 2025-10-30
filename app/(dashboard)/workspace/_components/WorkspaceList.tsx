import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

const workspaces = [
    {
        id: 1,
        name: "Organization 1",
        avatar:"Team 1"
    },
    {
        id: 2,
        name: "Organization 2",
        avatar:"Team 2"
    },
    {
        id: 3,
        name: "Organization 3",
        avatar:"Team 3"
    }
]

const colorCombinations = [
    "bg-indigo-500 hover:bg-indigo-600 text-white",
    "bg-green-500 hover:bg-green-600 text-white",
    "bg-blue-500 hover:bg-blue-600 text-white",
    "bg-red-500 hover:bg-red-600 text-white",
    "bg-yellow-500 hover:bg-yellow-600 text-white",
    "bg-orange-500 hover:bg-orange-600 text-white",
    "bg-purple-500 hover:bg-purple-600 text-white",
    "bg-pink-500 hover:bg-pink-600 text-white",
    "bg-gray-500 hover:bg-gray-600 text-white",
    "bg-gray-500 hover:bg-gray-600 text-white"
]

const getColorCombination = (id:string) => {
    const charSum=id
    .split(" ")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const colorIndex=charSum % colorCombinations.length
    return colorCombinations[colorIndex]
}
    

export function WorkspaceList() {
    return (
        <TooltipProvider>
            <div className="flex flex-col gap-2">
                {workspaces.map((ws)=> (
                    <TooltipProvider key={ws.id}>
                        <TooltipTrigger asChild>
                            <button
                            size="icon" 
                            className={cn(
                                "size-12 transition-all duration-200",
                            getWorkspaceColor(ws.id)
                            )}
                            >
                                <span className="text-sm font-semibold">{ws.avatar}</span>
                            </button>
                        </TooltipTrigger>
                    </TooltipProvider>
                ))}
            </div>

        </TooltipProvider>
    )
}