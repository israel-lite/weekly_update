'use client'

import { Task } from '@/types/task'
import { CheckCircle, Circle, TrendingUp, Calendar } from 'lucide-react'

interface TaskStatsProps {
  tasks: Task[]
}

export default function TaskStats({ tasks }: TaskStatsProps) {
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dueToday = tasks.filter(task => {
    if (!task.dueDate || task.completed) return false
    const dueDate = new Date(task.dueDate)
    dueDate.setHours(0, 0, 0, 0)
    return dueDate.getTime() === today.getTime()
  }).length

  const overdue = tasks.filter(task => {
    if (!task.dueDate || task.completed) return false
    return new Date(task.dueDate) < new Date()
  }).length

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="task-card text-center">
        <div className="flex items-center justify-center mb-2">
          <Circle className="text-blue-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{totalTasks}</div>
        <div className="text-sm text-gray-600">Total Tasks</div>
      </div>

      <div className="task-card text-center">
        <div className="flex items-center justify-center mb-2">
          <CheckCircle className="text-green-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{completedTasks}</div>
        <div className="text-sm text-gray-600">Completed</div>
      </div>

      <div className="task-card text-center">
        <div className="flex items-center justify-center mb-2">
          <TrendingUp className="text-purple-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{completionRate}%</div>
        <div className="text-sm text-gray-600">Completion</div>
      </div>

      <div className="task-card text-center">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="text-orange-500" size={24} />
        </div>
        <div className="text-2xl font-bold text-gray-800">{dueToday}</div>
        <div className="text-sm text-gray-600">Due Today</div>
      </div>
    </div>
  )
}
