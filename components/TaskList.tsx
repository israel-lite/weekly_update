'use client'

import { Task } from '@/types/task'
import { Check, Trash2, Calendar, Tag } from 'lucide-react'

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-100 text-blue-800'
      case 'personal': return 'bg-purple-100 text-purple-800'
      case 'shopping': return 'bg-pink-100 text-pink-800'
      case 'health': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <p className="text-gray-500 text-lg">No tasks found</p>
        <p className="text-gray-400 text-sm mt-2">Create your first task to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.completed ? 'opacity-75' : ''}`}
        >
          <div className="flex items-start gap-4">
            <button
              onClick={() => onToggle(task.id)}
              className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                task.completed
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500'
                  : 'border-gray-300 hover:border-blue-400'
              }`}
            >
              {task.completed && <Check size={16} className="text-white" />}
            </button>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className={`text-lg font-medium text-gray-800 ${task.completed ? 'line-through' : ''}`}>
                    {task.title}
                  </h4>
                  {task.description && (
                    <p className={`text-gray-600 mt-1 ${task.completed ? 'line-through' : ''}`}>
                      {task.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
                      {task.category}
                    </span>
                    {task.dueDate && (
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        {formatDate(task.dueDate)}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onDelete(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                  aria-label="Delete task"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
