import { GitPullRequest, CheckCircle2, Clock, Code2 } from 'lucide-react';

interface TaskCardProps {
  title: string;
  description: string;
  bounty: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Pro';
  status: 'Open' | 'Assigned' | 'Completed';
}

const TaskCard = ({ title, description, bounty, difficulty, status }: TaskCardProps) => {
  const isCompleted = status === 'Completed';
  
  const difficultyColor = {
    Beginner: 'text-green-400 bg-green-400/10',
    Intermediate: 'text-yellow-400 bg-yellow-400/10',
    Pro: 'text-red-400 bg-red-400/10',
  }[difficulty];

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-indigo-500/50 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <Code2 className="h-5 w-5 text-slate-400" />
          <span className={`text-xs font-mono px-2 py-1 rounded ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 font-mono mb-2 group-hover:text-indigo-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
        <div className="flex items-center text-xs text-slate-500">
          {isCompleted ? (
            <span className="flex items-center text-green-500">
              <CheckCircle2 className="h-4 w-4 mr-1" /> Completed
            </span>
          ) : (
            <span className="flex items-center text-indigo-400">
              <Clock className="h-4 w-4 mr-1" /> {status}
            </span>
          )}
        </div>
        
        <button 
          disabled={isCompleted}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            isCompleted 
              ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          <GitPullRequest className="h-4 w-4" />
          <span>{isCompleted ? 'Merged' : 'Submit PR'}</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
