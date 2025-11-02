'use client';
import { useSelectLayoutCv } from '@/provider/provider-layout-cv';
import { Button } from '../ui/button';
import Dialog from '../ui/dialog';
import template from './index';
import Image from 'next/image';
import { LayoutGrid } from 'lucide-react';

export default function DialogTemplate() {
  const status = useSelectLayoutCv();
  const { LayoutDialog, setLayoutDialog, selectLayoutState, setSelectLayoutStat } = status;
  return (
    <>
      <Button onClick={() => setLayoutDialog(!status.LayoutDialog)}>
        <p className="hidden md:block">تغییر دادن قالب</p>
        <LayoutGrid className="h-4 w-4 md:hidden" />
      </Button>
      <Dialog toggleModal={LayoutDialog} setToggleModal={setLayoutDialog}>
        <div className="w-full ">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">انتخاب قالب</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {template.map(
              (item: { id: number; name: string; description: string; preview: string }) => (
                <div
                  key={item.id}
                  className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 bg-white p-6 transition-all duration-200 hover:shadow-lg ${
                    selectLayoutState.id === item.id
                      ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectLayoutStat({ id: item.id, name: item.name })}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold transition-colors ${
                          selectLayoutState.id === item.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                        }`}
                      >
                        {item.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold capitalize text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>

                    {/* Preview placeholder */}
                    <div
                      className={`mt-2 h-32 w-full rounded-md border-2 border-dashed transition-colors ${
                        selectLayoutState.id === item.id
                          ? 'border-blue-300 bg-blue-50'
                          : 'border-gray-200 bg-gray-50 group-hover:border-gray-300'
                      }`}
                    >
                      <div className="flex h-full items-center justify-center">
                        <span className="text-xs text-gray-400">
                          <Image
                            // fill
                            src={`/images/preview/${item.preview}`}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            width={1000}
                            height={1000}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}
