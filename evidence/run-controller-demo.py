"""Run the original controller with simulated AWS clients; no network or AWS resources."""
import sys, types, runpy, time
from pathlib import Path
source=Path(sys.argv[1]); tick=0; states={}; events=[]
class Finished(BaseException): pass
class AWS:
 def get_queue_url(self,QueueName): return {'QueueUrl':'request' if '-req-' in QueueName else 'response'}
 def get_queue_attributes(self,QueueUrl,AttributeNames):
  return {'Attributes':{a:str(3 if tick==0 and QueueUrl=='request' and a=='ApproximateNumberOfMessages' else 0) for a in AttributeNames}}
 def describe_instances(self,InstanceIds):
  for i in InstanceIds: states.setdefault(i,'stopped')
  return {'Reservations':[{'Instances':[{'InstanceId':i,'State':{'Name':states[i]}} for i in InstanceIds]}]}
 def start_instances(self,InstanceIds):
  for i in InstanceIds:states[i]='running'
  events.append(f'Cycle {tick+1}: controller requested START for {len(InstanceIds)} workers')
 def stop_instances(self,InstanceIds):
  for i in InstanceIds:states[i]='stopped'
  events.append(f'Cycle {tick+1}: controller requested STOP for {len(InstanceIds)} workers')
def sleep(_):
 global tick
 events.append(f'Cycle {tick+1}: active workers = {sum(v=="running" for v in states.values())}')
 tick+=1
 if tick==4:raise Finished()
sys.modules['boto3']=types.SimpleNamespace(client=lambda *a,**k:AWS());time.sleep=sleep
try:runpy.run_path(str(source))
except Finished:pass
print('Original controller.py · local execution with simulated AWS responses')
print('Input: 3 queued requests, followed by 3 empty queue checks.\n')
print('\n'.join(events))
print('\nNo cloud resources launched. No inference or performance benchmark performed.')
